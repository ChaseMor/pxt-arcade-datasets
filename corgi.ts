namespace corgidata {
    const DATA: Buffer = hex`
        00001c430000f040ae47d54052b8a6408fc28140448b4c401d5a244077be07406666e63f1058c93f
        2fddb43ff0a7a63f560e9d3f022b973f5839943f46b6933f4260953fc3f5983f04569e3f0681a53f
        0456ae3f8716b93fcba1c53f5839d43f6abce43fd9cef73f8d970640be9f1240c5202040c74b2f40
        c52040400c0253403bdf6740022b7f407f6a8c40f0a79a40a245aa40508dbb400456ce40aaf1e240
        b81ef940c9760841022b1541ec51224177be2f4152b83c412b8748415eba514108ac564196435541
        14ae4b41689139417f6a2041d34d0441713dd2406210a440643b7f404c374940c1ca21408fc20540
        bc74e33f3d0ac73faaf1b23fb81ea53fa8c69b3fdd24963fbc74933f6f12933f2fdd943fb072983f
        b6f39d3f7d3fa53f7b14ae3fc3f5b83f0681c53f5839d43f2fdde43f9eeff73ff0a70640e5d01240
        ec512040508d2f40b07240405a645340ec51684014ae7f4039b48c400c029b4021b0aa403108bc40
        48e1ce408195e340f2d2f9402fdd0841b29d1541e5d02241ba493041c74b3d41d1224941ec515241
        33335741e3a5554123db4b41ee7c394193182041f2d20341b81ed1403d0aa34042607d4014ae4740
        128320406abc0440fca9e13fcba1c53fc1cab13f9318a43f48e19a3f4260953f21b0923fd34d923f
        9318943fd9ce973fdf4f9d3fa69ba43f6891ad3fec51b83f2fddc43f8195d33f5839e43fc74bf73f
        04560640986e124000002040022b2f40621040400c0253409eef6740c74b7f4012838c40e5d09a40
        c976aa40d9cebb4021b0ce40295ce340fca9f940b4c80841508d1541b4c82241d34d30415a643d41
        df4f4941be9f5241e3a55741713d56418d974c41a2453a4117d920416666863f96438b3f77be8f3f
        f2d28d3fc74b873f5a647b3fcba1653f17d94e3ffed4383f0ad7233f60e5103fdbf9fe3e77bedf3e
        a69bc43e448bac3e3d0a973ea69b843ed578693ef2d24d3e7d3f353e77be1f3e04560e3eb6f3fd3d
        f853e33d83c0ca3dec51b83d9eefa73d9a99993ddf4f8d3d6f12833d8fc2753dd578693dae47613d
        8716593df4fd543d8716593d1b2f5d3d4260653dfca9713d6f12833dbc74933d9eefa73da69bc43d
        6891ed3de17a143ea4703d3eb4c8763e0ad7a33eac1cda3eb29d0f3f508d373f0000603f2506813f
        f6288c3fc520903ff2d28d3f3d0a873fbe9f7a3fa69b643ff2d24d3fd9ce373fe5d0223f3bdf0f3f
        91edfc3e3f35de3e6f12c33e0c02ab3e1904963e8195833e8b6c673ea8c64b3e3333333e52b81e3e
        df4f0d3e6de7fb3dae47e13d39b4c83da245b63d54e3a53d508d973d96438b3d2506813d8fc2753d
        d578693d1b2f5d3d8716593df4fd543df4fd543d8716593dae47613dfca9713d6f12833d7368913d
        9eefa73da69bc43d6891ed3de17a143ea4703d3ed9ce773e1d5aa43ed122db3ed7a3103f7593383f
        3789613ffca9813f08ac8c3f1283903f7b148e3f022b873fbe9f7a3fa69b643f68914d3f508d373f
        5c8f223f295c0f3f7f6afc3e2db2dd3e5c8fc23efa7eaa3e0681953e6f12833e6666663e83c04a3e
        3333333e2db21d3eba490c3e23dbf93d643bdf3d39b4c83da245b63d0ad7a33d508d973d96438b3d
        2506813dfca9713d4260653d1b2f5d3df4fd543df4fd543df4fd543d8716593dae47613dfca9713d
        6f12833d7368913d54e3a53d5c8fc23d1f85eb3dbc74133e7f6a3c3e8fc2753ef853a33eac1cda3e
        3bdf0f3fec51383fae47613f`

    const BYTES_PER_NUMBER: number = 4;
    const HEADER_LENGTH = 1 * BYTES_PER_NUMBER;
    export const NUMBER_OF_WEEKS: number = DATA.getNumber(NumberFormat.Float32LE, 0);

    export function getBerryPopulation(week: number) {
        if (week < 0 || week >= NUMBER_OF_WEEKS) {
            return undefined;
        }
        const offset: number = HEADER_LENGTH
            + (week) * BYTES_PER_NUMBER;
        return Math.roundWithPrecision(DATA.getNumber(NumberFormat.Float32LE, offset), 3);
    }

    export function getCorgiPopulation(week: number) {
        if (week < 0 || week >= NUMBER_OF_WEEKS) {
            return undefined;
        }
        const offset: number = HEADER_LENGTH
            + (NUMBER_OF_WEEKS * BYTES_PER_NUMBER)
            + (week) * BYTES_PER_NUMBER;
        return Math.roundWithPrecision(DATA.getNumber(NumberFormat.Float32LE, offset), 3);
    }
} 