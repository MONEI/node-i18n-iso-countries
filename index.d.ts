export interface GetNameOptions {
  select: 'all' | 'official' | 'alias';
}

export type CountryName<T extends GetNameOptions> = T extends { select: 'all' } ? string[] : string

export type LocalizedCountryNames<T extends GetNameOptions> = {
  [alpha2Key: string]: CountryName<T>
};

export type LocaleData = {
  locale: string,
  countries: {
    [alpha2Key: string]: string[] | string
  }
};



export function registerLocale(localeData: LocaleData): void;
export function alpha2ToAlpha3(alpha2: string | Alpha2Code): string;
export function alpha2ToNumeric(alpha2: string | Alpha2Code): string;
export function alpha3ToAlpha2(alpha3: string | Alpha3Code): string;
export function alpha3ToNumeric(alpha3: string | Alpha3Code): string;
export function numericToAlpha2(numeric: number | string): string;
export function numericToAlpha3(numeric: number | string): string;

/**
 * Returns object map where key is alpha 2 code and value is alpha 3 code
 */
export function getAlpha2Codes(): { [alpha2Key: string]: string };

/**
 * Returns object map where key is alpha 3 code and value is alpha 2 code
 */
export function getAlpha3Codes(): { [alpha3Key: string]: string };

/**
 * Returns object map where key is numeric code and value is alpha 2 code
 */
export function getNumericCodes(): { [numericKey: string]: string };

/**
 * @param contryCode  Alpha2 or Alpha3 or Numeric
 * @param lang        ISO 639-1 format string
 */
export function getName(
  contryCode: string | number | Alpha2Code | Alpha3Code,
  lang: string
): string;

/**
 * @param contryCode  Alpha2 or Alpha3 or Numeric
 * @param lang        ISO 639-1 format string
 * @param options     Optional config of getName
 */
export function getName<T extends GetNameOptions>(
  contryCode: string | number | Alpha2Code | Alpha3Code,
  lang: string,
  options: T
): CountryName<T>;

/**
 * @param lang    ISO 639-1 format string
 */
export function getNames(lang: string): LocalizedCountryNames<{ select: 'official' }>;

/**
 * @param lang      ISO 639-1 format string
 * @param options   Optional config of getName
 */
export function getNames<T extends GetNameOptions>(
  lang: string,
  options: T
): LocalizedCountryNames<T>;

export function getAlpha2Code(name: string, lang: string): string;
export function getSimpleAlpha2Code(name: string, lang: string): string;
export function getAlpha3Code(name: string, lang: string): string;
export function getSimpleAlpha3Code(name: string, lang: string): string;
export function langs(): string[];
export function toAlpha3(
  alpha2orNumeric: number | string | Alpha2Code
): string;
export function toAlpha2(
  alpha3orNumeric: number | string | Alpha3Code
): string;
export function isValid(alpha2orAlpha3orNumeric: string | number): boolean;


export type Alpha2Code =
  | "AF"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CD"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CY"
  | "CZ"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KP"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "MK"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "SH"
  | "KN"
  | "LC"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "SC"
  | "SL"
  | "SG"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW"
  | "AX"
  | "BQ"
  | "CW"
  | "GG"
  | "IM"
  | "JE"
  | "ME"
  | "BL"
  | "MF"
  | "RS"
  | "SX"
  | "SS"
  | "XK"


export type Alpha3Code =
  | "AFG"
  | "ALB"
  | "DZA"
  | "ASM"
  | "AND"
  | "AGO"
  | "AIA"
  | "ATA"
  | "ATG"
  | "ARG"
  | "ARM"
  | "ABW"
  | "AUS"
  | "AUT"
  | "AZE"
  | "BHS"
  | "BHR"
  | "BGD"
  | "BRB"
  | "BLR"
  | "BEL"
  | "BLZ"
  | "BEN"
  | "BMU"
  | "BTN"
  | "BOL"
  | "BIH"
  | "BWA"
  | "BVT"
  | "BRA"
  | "IOT"
  | "BRN"
  | "BGR"
  | "BFA"
  | "BDI"
  | "KHM"
  | "CMR"
  | "CAN"
  | "CPV"
  | "CYM"
  | "CAF"
  | "TCD"
  | "CHL"
  | "CHN"
  | "CXR"
  | "CCK"
  | "COL"
  | "COM"
  | "COG"
  | "COD"
  | "COK"
  | "CRI"
  | "CIV"
  | "HRV"
  | "CUB"
  | "CYP"
  | "CZE"
  | "DNK"
  | "DJI"
  | "DMA"
  | "DOM"
  | "ECU"
  | "EGY"
  | "SLV"
  | "GNQ"
  | "ERI"
  | "EST"
  | "ETH"
  | "FLK"
  | "FRO"
  | "FJI"
  | "FIN"
  | "FRA"
  | "GUF"
  | "PYF"
  | "ATF"
  | "GAB"
  | "GMB"
  | "GEO"
  | "DEU"
  | "GHA"
  | "GIB"
  | "GRC"
  | "GRL"
  | "GRD"
  | "GLP"
  | "GUM"
  | "GTM"
  | "GIN"
  | "GNB"
  | "GUY"
  | "HTI"
  | "HMD"
  | "VAT"
  | "HND"
  | "HKG"
  | "HUN"
  | "ISL"
  | "IND"
  | "IDN"
  | "IRN"
  | "IRQ"
  | "IRL"
  | "ISR"
  | "ITA"
  | "JAM"
  | "JPN"
  | "JOR"
  | "KAZ"
  | "KEN"
  | "KIR"
  | "PRK"
  | "KOR"
  | "KWT"
  | "KGZ"
  | "LAO"
  | "LVA"
  | "LBN"
  | "LSO"
  | "LBR"
  | "LBY"
  | "LIE"
  | "LTU"
  | "LUX"
  | "MAC"
  | "MDG"
  | "MWI"
  | "MYS"
  | "MDV"
  | "MLI"
  | "MLT"
  | "MHL"
  | "MTQ"
  | "MRT"
  | "MUS"
  | "MYT"
  | "MEX"
  | "FSM"
  | "MDA"
  | "MCO"
  | "MNG"
  | "MSR"
  | "MAR"
  | "MOZ"
  | "MMR"
  | "NAM"
  | "NRU"
  | "NPL"
  | "NLD"
  | "NCL"
  | "NZL"
  | "NIC"
  | "NER"
  | "NGA"
  | "NIU"
  | "NFK"
  | "MNP"
  | "MKD"
  | "NOR"
  | "OMN"
  | "PAK"
  | "PLW"
  | "PSE"
  | "PAN"
  | "PNG"
  | "PRY"
  | "PER"
  | "PHL"
  | "PCN"
  | "POL"
  | "PRT"
  | "PRI"
  | "QAT"
  | "REU"
  | "ROU"
  | "RUS"
  | "RWA"
  | "SHN"
  | "KNA"
  | "LCA"
  | "SPM"
  | "VCT"
  | "WSM"
  | "SMR"
  | "STP"
  | "SAU"
  | "SEN"
  | "SYC"
  | "SLE"
  | "SGP"
  | "SVK"
  | "SVN"
  | "SLB"
  | "SOM"
  | "ZAF"
  | "SGS"
  | "ESP"
  | "LKA"
  | "SDN"
  | "SUR"
  | "SJM"
  | "SWZ"
  | "SWE"
  | "CHE"
  | "SYR"
  | "TWN"
  | "TJK"
  | "TZA"
  | "THA"
  | "TLS"
  | "TGO"
  | "TKL"
  | "TON"
  | "TTO"
  | "TUN"
  | "TUR"
  | "TKM"
  | "TCA"
  | "TUV"
  | "UGA"
  | "UKR"
  | "ARE"
  | "GBR"
  | "USA"
  | "UMI"
  | "URY"
  | "UZB"
  | "VUT"
  | "VEN"
  | "VNM"
  | "VGB"
  | "VIR"
  | "WLF"
  | "ESH"
  | "YEM"
  | "ZMB"
  | "ZWE"
  | "ALA"
  | "BES"
  | "CUW"
  | "GGY"
  | "IMN"
  | "JEY"
  | "MNE"
  | "BLM"
  | "MAF"
  | "SRB"
  | "SXM"
  | "SSD"
  | "XKX"
