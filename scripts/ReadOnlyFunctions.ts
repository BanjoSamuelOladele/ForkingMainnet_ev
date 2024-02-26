import {ethers} from "hardhat";

let helpers: {
    // setCode: (address: string, code: string) => Promise<void>;
    // SnapshotRestorer: SnapshotRestorer;
    // setNextBlockBaseFeePerGas: (baseFeePerGas: NumberLike) => Promise<void>;
    // reset: (url?: string, blockNumber?: NumberLike) => Promise<void>;
    impersonateAccount: (address: string) => Promise<void>;
    // takeSnapshot: () => Promise<SnapshotRestorer>;
    // setPrevRandao: (prevRandao: NumberLike) => Promise<void>;
    // setCoinbase: (address: string) => Promise<void>;
    // mine: (blocks?: NumberLike, options?: { interval?: NumberLike }) => Promise<void>;
    // setStorageAt: (address: string, index: NumberLike, value: NumberLike) => Promise<void>;
    // setNonce: (address: string, nonce: NumberLike) => Promise<void>;
    // setBalance: (address: string, balance: NumberLike) => Promise<void>;
    // time: {
    //     advanceBlock: (numberOfBlocks?: NumberLike) => Promise<number>;
    //     increaseTo: (timestamp: (NumberLike | Date)) => Promise<void>;
    //     latest: () => Promise<number>;
    //     advanceBlockTo: (blockNumber: NumberLike) => Promise<void>;
    //     setNextBlockTimestamp: (timestamp: (NumberLike | Date)) => Promise<void>;
    //     duration: {
    //         seconds: (n: number) => number;
    //         years: (n: number) => number;
    //         millis: (n: number) => number;
    //         weeks: (n: number) => number;
    //         hours: (n: number) => number;
    //         minutes: (n: number) => number;
    //         days: (n: number) => number
    //     } | duration;
    //     increase: (amountInSeconds: NumberLike) => Promise<number>;
    //     latestBlock: () => Promise<number>
    // } | time;
    // dropTransaction: (txHash: string) => Promise<boolean>;
    // setBlockGasLimit: (blockGasLimit: NumberLike) => Promise<void>;
    // stopImpersonatingAccount: (address: string) => Promise<void>;
    // mineUpTo: (blockNumber: NumberLike) => Promise<void>;
    // getStorageAt: (address: string, index: NumberLike, block?: (NumberLike | BlockTag)) => Promise<string>;
    // loadFixture<T>(fixture: Fixture<T>): Promise<T>
};
helpers = require("@nomicfoundation/hardhat-network-helpers");

const main = async ()=>  {

    const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const tetherAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const swapper = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

    const uniSwap = await ethers.getContractAt("IUniSwap", swapper);


    const shouldReturnFactoryAddress = await uniSwap.factory();
    const canonicalWethAddress = await uniSwap.WETH();

    const getAmountOut = await uniSwap.getAmountsOut(1000, [daiAddress, tetherAddress]);

    console.log("--------------------------------------------");
    
    console.log("return factory address of uniswap", shouldReturnFactoryAddress);

    console.log("---------------------------------------------")
    console.log("return canonical address of weth", canonicalWethAddress);

    console.log("---------------------------------------------")
    console.log("getAmount out:::", getAmountOut);

}

main().catch((error) =>{
    console.log(error);
    process.exitCode = 2;
})