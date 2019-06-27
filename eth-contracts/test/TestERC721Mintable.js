var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const account_five = accounts[4];
    const account_six = accounts[5];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1, {from: account_one});
            await this.contract.mint(account_three, 2, {from: account_one});
            await this.contract.mint(account_four, 3, {from: account_one});
            await this.contract.mint(account_five, 4, {from: account_one});
            await this.contract.mint(account_six, 5, {from: account_one});
        })

        it('should return total supply', async function () { 
            let total = await this.contract.totalSupply.call();
            assert.equal(total.toNumber(), 5, "Total supply not correct!");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf.call(account_two, {from: account_one});
            assert.equal(balance.toNumber(), 1, "The token balance is invalid!");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let _tokenURI = await this.contract.tokenURI.call(1, {from: account_one});
            assert(_tokenURI == "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "tokenURI ist is not correct!");
        })

        it('should transfer token from one owner to another', async function () { 
            
            await this.contract.approve(account_three, 1, {from: account_two});
            await this.contract.transferFrom(account_two, account_three, 1, {from: account_two});
            tokenOwner = await this.contract.ownerOf.call(1);
            assert.equal(tokenOwner, account_three, "Owner should be account_three");            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false;
            try {
                await this.contract.mint(account_six,5,{from: account_two});
            } catch (e) {
                failed = true;
            }

            assert.equal(failed, true, "Address is not account owner");
              
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner.call({from: account_one});
            assert.equal(owner, account_one, "Owner is not account_one!");
        })

    });
})