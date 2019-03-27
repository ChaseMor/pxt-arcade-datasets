namespace lemonadedata {
    const DATA: Buffer = hex`
        5b004700480050005100540041005a003e0054004d0045004e0045003a00490042004d004a004000
        580059004a0055005300450056004e0053004b004f004f00470047004b0057004700540045004800
        52003e00520052005f003f00510047004c005400440048004e0053004a005700460043004b005000
        48004300550041004d005a0046004e00460051004d004c004b00510059004d004500430052005d00
        4700440048005d0056004100550048004f0044004a004700a000a500c700c900e2007800fc007200
        dd00c6008e00c20097005b009f008a00b100a9008300ee00fb00b600e100e0008d00e700ad00d600
        b200ac00c40096008d00b100e100a400d5008b00ae00c4007300d400d2001a017700d6009c00c100
        eb007b00a200b400c600b200e60094008a00b500c4009e009000eb007600bf00fd009b00ae00a400
        c000b7009e00b400d1000101c00096008a00ce00fe0093008a00a0000701eb008700eb00ae00ba00
        8600b700a500
    `

    const BYTES_PER_NUMBER: number = 2;
    const HEADER_LENGTH = 1 * BYTES_PER_NUMBER;
    export const NUMBER_OF_DAYS: number = DATA.getNumber(NumberFormat.Int16LE, 0);

    export function getTemperature(day: number) {
        if (day < 0 || day >= NUMBER_OF_DAYS) {
            return undefined;
        }
        const offset: number = HEADER_LENGTH
            + (day) * BYTES_PER_NUMBER;
        return DATA.getNumber(NumberFormat.Int16LE, offset);
    }

    export function getSales(day: number) {
        if (day < 0 || day >= NUMBER_OF_DAYS) {
            return undefined;
        }
        const offset: number = HEADER_LENGTH
            + (NUMBER_OF_DAYS * BYTES_PER_NUMBER)
            + (day) * BYTES_PER_NUMBER;
        return DATA.getNumber(NumberFormat.Int16LE, offset);
    }
} 