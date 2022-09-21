import Moralis from 'moralis';

function Native({ nativeBalance, address }) {
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance} ETH</h3>
        </div>
    );
}

export async function getServerSideProps(context) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const address = '0xBc63219a3a5453dB9CcD7096c6009c1Ed4e69b45';

    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
        address,
    });

    return {
        props: { address, nativeBalance: nativeBalance.result.balance.ether },
    };
}

export default Native;