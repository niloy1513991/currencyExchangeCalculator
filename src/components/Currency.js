const currencies = [
  { "id": 1, "name": "ADA" },
  { "id": 2, "name": "AED" },
  { "id": 3, "name": "AFN" },
  { "id": 4, "name": "ALL" },
  { "id": 5, "name": "AMD" },
  { "id": 6, "name": "ANG" },
  { "id": 7, "name": "AOA" },
  { "id": 8, "name": "ARS" },
  { "id": 9, "name": "AUD" },
  { "id": 10, "name": "AWG" },
  { "id": 11, "name": "AZN" },
  { "id": 12, "name": "BAM" },
  { "id": 13, "name": "BBD" },
  { "id": 14, "name": "BDT" },
  { "id": 15, "name": "BGN" },
  { "id": 16, "name": "BHD" },
  { "id": 17, "name": "BIF" },
  { "id": 18, "name": "BMD" },
  { "id": 19, "name": "BND" },
  { "id": 20, "name": "BOB" },
  { "id": 21, "name": "BRL" },
  { "id": 22, "name": "BSD" },
  { "id": 23, "name": "BTN" },
  { "id": 24, "name": "BWP" },
  { "id": 25, "name": "BYN" },
  { "id": 26, "name": "BZD" },
  { "id": 27, "name": "CAD" },
  { "id": 28, "name": "CDF" },
  { "id": 29, "name": "CHF" },
  { "id": 30, "name": "CLP" },
  { "id": 31, "name": "CNY" },
  { "id": 32, "name": "COP" },
  { "id": 33, "name": "CRC" },
  { "id": 34, "name": "CUP" },
  { "id": 35, "name": "CVE" },
  { "id": 36, "name": "CZK" },
  { "id": 37, "name": "DJF" },
  { "id": 38, "name": "DKK" },
  { "id": 39, "name": "DOP" },
  { "id": 40, "name": "DZD" },
  { "id": 41, "name": "EGP" },
  { "id": 42, "name": "ERN" },
  { "id": 43, "name": "ETB" },
  { "id": 44, "name": "EUR" },
  { "id": 45, "name": "FJD" },
  { "id": 46, "name": "FKP" },
  { "id": 47, "name": "FOK" },
  { "id": 48, "name": "GBP" },
  { "id": 49, "name": "GEL" },
  { "id": 50, "name": "GGP" },
  { "id": 51, "name": "GHS" },
  { "id": 52, "name": "GIP" },
  { "id": 53, "name": "GMD" },
  { "id": 54, "name": "GNF" },
  { "id": 55, "name": "GTQ" },
  { "id": 56, "name": "GYD" },
  { "id": 57, "name": "HKD" },
  { "id": 58, "name": "HNL" },
  { "id": 59, "name": "HRK" },
  { "id": 60, "name": "HTG" },
  { "id": 61, "name": "HUF" },
  { "id": 62, "name": "IDR" },
  { "id": 63, "name": "ILS" },
  { "id": 64, "name": "IMP" },
  { "id": 65, "name": "INR" },
  { "id": 66, "name": "IQD" },
  { "id": 67, "name": "IRR" },
  { "id": 68, "name": "ISK" },
  { "id": 69, "name": "JEP" },
  { "id": 70, "name": "JMD" },
  { "id": 71, "name": "JOD" },
  { "id": 72, "name": "JPY" },
  { "id": 73, "name": "KES" },
  { "id": 74, "name": "KGS" },
  { "id": 75, "name": "KHR" },
  { "id": 76, "name": "KID" },
  { "id": 77, "name": "KMF" },
  { "id": 78, "name": "KRW" },
  { "id": 79, "name": "KWD" },
  { "id": 80, "name": "KYD" },
  { "id": 81, "name": "KZT" },
  { "id": 82, "name": "LAK" },
  { "id": 83, "name": "LBP" },
  { "id": 84, "name": "LKR" },
  { "id": 85, "name": "LRD" },
  { "id": 86, "name": "LSL" },
  { "id": 87, "name": "LYD" },
  { "id": 88, "name": "MAD" },
  { "id": 89, "name": "MDL" },
  { "id": 90, "name": "MGA" },
  { "id": 91, "name": "MKD" },
  { "id": 92, "name": "MMK" },
  { "id": 93, "name": "MNT" },
  { "id": 94, "name": "MOP" },
  { "id": 95, "name": "MRU" },
  { "id": 96, "name": "MUR" },
  { "id": 97, "name": "MVR" },
  { "id": 98, "name": "MWK" },
  { "id": 99, "name": "MXN" },
  { "id": 100, "name": "MYR" },
  { "id": 101, "name": "MZN" },
  { "id": 102, "name": "NAD" },
  { "id": 103, "name": "NGN" },
  { "id": 104, "name": "NIO" },
  { "id": 105, "name": "NOK" },
  { "id": 106, "name": "NPR" },
  { "id": 107, "name": "NZD" },
  { "id": 108, "name": "OMR" },
  { "id": 109, "name": "PAB" },
  { "id": 110, "name": "PEN" },
  { "id": 111, "name": "PGK" },
  { "id": 112, "name": "PHP" },
  { "id": 113, "name": "PKR" },
  { "id": 114, "name": "PLN" },
  { "id": 115, "name": "PYG" },
  { "id": 116, "name": "QAR" },
  { "id": 117, "name": "RON" },
  { "id": 118, "name": "RSD" },
  { "id": 119, "name": "RUB" },
  { "id": 120, "name": "RWF" },
  { "id": 121, "name": "SAR" },
  { "id": 122, "name": "SBD" },
  { "id": 123, "name": "SCR" },
  { "id": 124, "name": "SDG" },
  { "id": 125, "name": "SEK" },
  { "id": 126, "name": "SGD" },
  { "id": 127, "name": "SHP" },
  { "id": 128, "name": "SLL" },
  { "id": 129, "name": "SOS" },
  { "id": 130, "name": "SRD" },
  { "id": 131, "name": "SSP" },
  { "id": 132, "name": "STN" },
  { "id": 133, "name": "SYP" },
  { "id": 134, "name": "SZL" },
  { "id": 135, "name": "THB" },
  { "id": 136, "name": "TJS" },
  { "id": 137, "name": "TMT" },
  { "id": 138, "name": "TND" },
  { "id": 139, "name": "TOP" },
  { "id": 140, "name": "TRY" },
  { "id": 141, "name": "TTD" },
  { "id": 142, "name": "TVD" },
  { "id": 143, "name": "TWD" },
  { "id": 144, "name": "TZS" },
  { "id": 145, "name": "UAH" },
  { "id": 146, "name": "UGX" },
  { "id": 147, "name": "USD" },
  { "id": 148, "name": "UYU" },
  { "id": 149, "name": "UZS" },
  { "id": 150, "name": "VES" },
  { "id": 151, "name": "VND" },
  { "id": 152, "name": "VUV" },
  { "id": 153, "name": "WST" },
  { "id": 154, "name": "XAF" },
  { "id": 155, "name": "XCD" },
  { "id": 156, "name": "XDR" },
  { "id": 157, "name": "XOF" },
  { "id": 158, "name": "XPF" },
  { "id": 159, "name": "YER" },
  { "id": 160, "name": "ZAR" },
  { "id": 161, "name": "ZMW" },
  { "id": 162, "name": "ZWL" },
];

export default currencies;