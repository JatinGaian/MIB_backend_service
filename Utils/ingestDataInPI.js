const get_all_boards = require("../APIs/get_all_boards");
var axios = require("axios");
const { changeIssueFields } = require("./changeIssueFields");
require("dotenv").config();

const domain = "mobiusdtaas";
const tokenForMIB = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEyNDM4MDQsImlhdCI6MTcyMTIwNzgwNCwianRpIjoiZTMyOWJkODgtNTA3OS00NTU2LWEwYzItNjMxOWQwMWNiNGNjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6WyJCT0xUWk1BTk5fQk9UIiwiTU9ORVQiLCJIT0xBQ1JBQ1kiLCJhY2NvdW50IiwiVklOQ0kiXSwic3ViIjoiMzAzN2RmNmItYTRhNS00MTU2LWExMjgtZDBlN2RhMzljMDc4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiUEFTQ0FMX0lOVEVMTElHRU5DRSIsInNlc3Npb25fc3RhdGUiOiJjZDc4NWZiMy1jNzY2LTRhMTMtOWM2ZS0yZDk5YmU1MGNkMjQiLCJuYW1lIjoibW9iaXVzIG1vYml1cyIsImdpdmVuX25hbWUiOiJtb2JpdXMiLCJmYW1pbHlfbmFtZSI6Im1vYml1cyIsInByZWZlcnJlZF91c2VybmFtZSI6InBhc3N3b3JkX3RlbmFudF9tb2JpdXNAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbCI6InBhc3N3b3JkX3RlbmFudF9tb2JpdXNAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1hc3RlciIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJCT0xUWk1BTk5fQk9UIjp7InJvbGVzIjpbIkJPTFRaTUFOTl9CT1RfVVNFUiJdfSwiUEFTQ0FMX0lOVEVMTElHRU5DRSI6eyJyb2xlcyI6WyJQQVNDQUxfSU5URUxMSUdFTkNFX1VTRVIiLCJQQVNDQUxfSU5URUxMSUdFTkNFX0FETUlOIl19LCJNT05FVCI6eyJyb2xlcyI6WyJNT05FVF9VU0VSIl19LCJIT0xBQ1JBQ1kiOnsicm9sZXMiOlsiU1VQRVJBRE1JTiIsIkhPTEFDUkFDWV9VU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX0sIlZJTkNJIjp7InJvbGVzIjpbIlZJTkNJX1VTRVIiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJjZDc4NWZiMy1jNzY2LTRhMTMtOWM2ZS0yZDk5YmU1MGNkMjQiLCJ0ZW5hbnRJZCI6IjMwMzdkZjZiLWE0YTUtNDE1Ni1hMTI4LWQwZTdkYTM5YzA3OCJ9.eaqPIPTS_TpejcSTV9Wj0RGdpVfq1NB_LZ2zwHG0GOFuR5a8Uw71hq2WsYwWesu2JQ1W0_2AB4SfLOqcM0KLMcqiyctlrRtRH-PwHTmUBF0Cuxa5CHzPk3UQ_VDt9lcRea7RzSLpbH6zWbJBkGeJTaFgD3QBL3nPfhsGRnLahUmiPb51JbPA7K8jxYCQyRpzJKemeZhr1tvMGaBrYsfLVbRYQ5XXeq0oZGanqFDUMEl2jt9ypQ4mq9YQrmTxHRzFOoHqaX1cDoPjW2MWi5jXzV5dRQmMEd4eMNIttf6ktBSU45rlduaCaa9CW9BK5F_Pxq-QSwvuIDPeoAP88s5g-Q"

const AllBoards = [
    {
        "board_id": 1,
        "board_name": "MOB board",
        "board_type": "scrum",
        "project_key": "MOB",
        "project_name": "Mobius",
        "projectId": 10000
    },
    {
        "board_id": 416,
        "board_name": "THPA board",
        "board_type": "scrum",
        "project_key": "THPA",
        "project_name": "The Platform Academy ",
        "projectId": 10348
    },
    {
        "board_id": 4,
        "board_name": "PM board",
        "board_type": "scrum",
        "project_key": "PM",
        "project_name": "Product Marketing ",
        "projectId": 10001
    },
    {
        "board_id": 199,
        "board_name": "UX Work",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 419,
        "board_name": "MAC board",
        "board_type": "scrum",
        "project_key": "MAC",
        "project_name": "Mobius Agent Canvas",
        "projectId": 10350
    },
    {
        "board_id": 420,
        "board_name": "MD board",
        "board_type": "scrum",
        "project_key": "MD",
        "project_name": "Mobius Drones",
        "projectId": 10351
    },
    {
        "board_id": 421,
        "board_name": "AUR board",
        "board_type": "scrum",
        "project_key": "AUR",
        "project_name": "Autonomous Robots",
        "projectId": 10352
    },
    {
        "board_id": 82,
        "board_name": "L3AAS board",
        "board_type": "scrum",
        "project_key": "L3AAS",
        "project_name": "L3aaS",
        "projectId": 10067
    },
    {
        "board_id": 91,
        "board_name": "OCS board",
        "board_type": "scrum",
        "project_key": "OCS",
        "project_name": "OCS",
        "projectId": 10100
    },
    {
        "board_id": 150,
        "board_name": "Marketplace",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 135,
        "board_name": "PLED board",
        "board_type": "scrum",
        "project_key": "PLED",
        "project_name": "Pledge",
        "projectId": 10128
    },
    {
        "board_id": 202,
        "board_name": "COE Sprint4",
        "board_type": "scrum",
        "project_key": "TAF",
        "project_name": "COE",
        "projectId": 10059
    },
    {
        "board_id": 203,
        "board_name": "IOS board",
        "board_type": "scrum",
        "project_key": "IOS",
        "project_name": "CompanionAppIOS",
        "projectId": 10156
    },
    {
        "board_id": 140,
        "board_name": "TechWarriors Sprint 6",
        "board_type": "scrum",
        "project_key": "AT",
        "project_name": "Middleware",
        "projectId": 10066
    },
    {
        "board_id": 79,
        "board_name": "MAYA board",
        "board_type": "scrum",
        "project_key": "MAYA",
        "project_name": "MAYA",
        "projectId": 10064
    },
    {
        "board_id": 80,
        "board_name": "HM board",
        "board_type": "scrum",
        "project_key": "HM",
        "project_name": "Hybrid Middleware",
        "projectId": 10065
    },
    {
        "board_id": 90,
        "board_name": "scrum board - NAB",
        "board_type": "scrum",
        "project_key": "MOB",
        "project_name": "Mobius",
        "projectId": 10000
    },
    {
        "board_id": 61,
        "board_name": "Sprint 2",
        "board_type": "scrum",
        "project_key": "MOB",
        "project_name": "Mobius",
        "projectId": 10000
    },
    {
        "board_id": 78,
        "board_name": "GP board",
        "board_type": "scrum",
        "project_key": "GP",
        "project_name": "Ground Plex",
        "projectId": 10063
    },
    {
        "board_id": 102,
        "board_name": "PILT board",
        "board_type": "scrum",
        "project_key": "PILT",
        "project_name": "PilotTest",
        "projectId": 10105
    },
    {
        "board_id": 71,
        "board_name": "Testing Team Board",
        "board_type": "scrum",
        "project_key": null,
        "project_name": null,
        "projectId": null
    },
    {
        "board_id": 107,
        "board_name": "test pilot",
        "board_type": "scrum",
        "project_key": "PIL",
        "project_name": "Pilot",
        "projectId": 10104
    },
    {
        "board_id": 123,
        "board_name": "Pilot srum test",
        "board_type": "scrum",
        "project_key": "PIL",
        "project_name": "Pilot",
        "projectId": 10104
    },
    {
        "board_id": 138,
        "board_name": "UMP board",
        "board_type": "scrum",
        "project_key": "UMP",
        "project_name": "Unified Mobius Portal",
        "projectId": 10130
    },
    {
        "board_id": 141,
        "board_name": "MAV",
        "board_type": "scrum",
        "project_key": "MAV",
        "project_name": "Maverick",
        "projectId": 10115
    },
    {
        "board_id": 298,
        "board_name": "TED board",
        "board_type": "scrum",
        "project_key": "TED",
        "project_name": "TEDaaS XPX",
        "projectId": 10270
    },
    {
        "board_id": 194,
        "board_name": "COE",
        "board_type": "scrum",
        "project_key": "TAF",
        "project_name": "COE",
        "projectId": 10059
    },
    {
        "board_id": 187,
        "board_name": "MP-Sprint-3",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 169,
        "board_name": "Platform Ops",
        "board_type": "scrum",
        "project_key": "CP",
        "project_name": "Backend Engg",
        "projectId": 10053
    },
    {
        "board_id": 185,
        "board_name": "DS board",
        "board_type": "scrum",
        "project_key": "DS",
        "project_name": "Designer",
        "projectId": 10149
    },
    {
        "board_id": 195,
        "board_name": "MP Sprint-4",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 186,
        "board_name": "Backend Services Sprint Board",
        "board_type": "scrum",
        "project_key": "CP",
        "project_name": "Backend Engg",
        "projectId": 10053
    },
    {
        "board_id": 191,
        "board_name": "MP-Sprint-4",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 193,
        "board_name": "CDP board",
        "board_type": "scrum",
        "project_key": "CDP",
        "project_name": "CDP Portal",
        "projectId": 10151
    },
    {
        "board_id": 196,
        "board_name": "MP",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 74,
        "board_name": "Sprint 0",
        "board_type": "scrum",
        "project_key": "AD",
        "project_name": "Old_ Adwize _ Depricated board",
        "projectId": 10003
    },
    {
        "board_id": 179,
        "board_name": "MSUDeployments",
        "board_type": "scrum",
        "project_key": "AT",
        "project_name": "Middleware",
        "projectId": 10066
    },
    {
        "board_id": 81,
        "board_name": "AT board",
        "board_type": "scrum",
        "project_key": "AT",
        "project_name": "Middleware",
        "projectId": 10066
    },
    {
        "board_id": 133,
        "board_name": "SHAPE-SCRUM",
        "board_type": "scrum",
        "project_key": "SHAP",
        "project_name": "Shapeshifters",
        "projectId": 10125
    },
    {
        "board_id": 117,
        "board_name": "VIS board",
        "board_type": "scrum",
        "project_key": "VIS",
        "project_name": "Visigners",
        "projectId": 10113
    },
    {
        "board_id": 153,
        "board_name": "ATSC1 board",
        "board_type": "scrum",
        "project_key": "ATSC1",
        "project_name": "ATSC_1.0 Middleware",
        "projectId": 10142
    },
    {
        "board_id": 155,
        "board_name": "Red Team - Deep Solutions",
        "board_type": "scrum",
        "project_key": "IT",
        "project_name": "Infrastructure Team",
        "projectId": 10116
    },
    {
        "board_id": 162,
        "board_name": "Blue Team - Integrations",
        "board_type": "scrum",
        "project_key": "CP",
        "project_name": "Backend Engg",
        "projectId": 10053
    },
    {
        "board_id": 168,
        "board_name": "Olive sprint 3",
        "board_type": "scrum",
        "project_key": "MP",
        "project_name": "Mobius MarketPlace",
        "projectId": 10139
    },
    {
        "board_id": 76,
        "board_name": "Sprint Board",
        "board_type": "scrum",
        "project_key": "CP",
        "project_name": "Backend Engg",
        "projectId": 10053
    },
    {
        "board_id": 128,
        "board_name": "NCS board",
        "board_type": "scrum",
        "project_key": "NCS",
        "project_name": "Incois",
        "projectId": 10120
    },
    {
        "board_id": 97,
        "board_name": "Pitcher",
        "board_type": "scrum",
        "project_key": "CP",
        "project_name": "Backend Engg",
        "projectId": 10053
    },
    {
        "board_id": 98,
        "board_name": "CP",
        "board_type": "scrum",
        "project_key": "CP",
        "project_name": "Backend Engg",
        "projectId": 10053
    },
    {
        "board_id": 292,
        "board_name": "PIR board",
        "board_type": "scrum",
        "project_key": "PIR",
        "project_name": "Platform Common Services",
        "projectId": 10265
    },
    {
        "board_id": 124,
        "board_name": "Green Olive",
        "board_type": "scrum",
        "project_key": "AD",
        "project_name": "Old_ Adwize _ Depricated board",
        "projectId": 10003
    },
    {
        "board_id": 144,
        "board_name": "Jarvis",
        "board_type": "scrum",
        "project_key": "MOB",
        "project_name": "Mobius",
        "projectId": 10000
    },
    {
        "board_id": 83,
        "board_name": "CES Scrum Board",
        "board_type": "scrum",
        "project_key": "MOB",
        "project_name": "Mobius",
        "projectId": 10000
    },
    {
        "board_id": 115,
        "board_name": "Green Pickle",
        "board_type": "scrum",
        "project_key": "AT",
        "project_name": "Middleware",
        "projectId": 10066
    },
    {
        "board_id": 114,
        "board_name": "Android TV/App",
        "board_type": "scrum",
        "project_key": "ANDROID",
        "project_name": "NextGen TV/App",
        "projectId": 10110
    },
    {
        "board_id": 402,
        "board_name": "PCS board",
        "board_type": "scrum",
        "project_key": "PIR",
        "project_name": "Platform Common Services",
        "projectId": 10265
    },
    {
        "board_id": 257,
        "board_name": "Design Sprint 2",
        "board_type": "scrum",
        "project_key": "DS",
        "project_name": "Designer",
        "projectId": 10149
    },
    {
        "board_id": 244,
        "board_name": "SUP board",
        "board_type": "scrum",
        "project_key": "SUP",
        "project_name": "Super Dashboard ",
        "projectId": 10205
    },
    {
        "board_id": 405,
        "board_name": "RNDH board",
        "board_type": "scrum",
        "project_key": "RNDH",
        "project_name": "RUNDheer",
        "projectId": 10337
    },
    {
        "board_id": 252,
        "board_name": "FE board",
        "board_type": "scrum",
        "project_key": "FE",
        "project_name": "FROND END ",
        "projectId": 10212
    },
    {
        "board_id": 253,
        "board_name": "DAT board",
        "board_type": "scrum",
        "project_key": "DAT",
        "project_name": "DATASCIENCE ",
        "projectId": 10213
    },
    {
        "board_id": 258,
        "board_name": "MU board",
        "board_type": "scrum",
        "project_key": "MU",
        "project_name": "Mobius UX",
        "projectId": 10219
    },
    {
        "board_id": 259,
        "board_name": "Monet Scrum Board",
        "board_type": "scrum",
        "project_key": "MPE",
        "project_name": "Mobius Platform Engineering",
        "projectId": 10216
    },
    {
        "board_id": 404,
        "board_name": "LRM board",
        "board_type": "scrum",
        "project_key": "LRM",
        "project_name": "Longley Rice Map",
        "projectId": 10335
    },
    {
        "board_id": 407,
        "board_name": "IC board",
        "board_type": "scrum",
        "project_key": "IC",
        "project_name": "Implementations Commons",
        "projectId": 10339
    },
    {
        "board_id": 408,
        "board_name": "Mobius Marketplace Agents",
        "board_type": "scrum",
        "project_key": "MHCY",
        "project_name": "Holacracy",
        "projectId": 10227
    },
    {
        "board_id": 282,
        "board_name": "MIE board",
        "board_type": "scrum",
        "project_key": "IMPL",
        "project_name": "Mobius Engineering Implementation",
        "projectId": 10249
    },
    {
        "board_id": 276,
        "board_name": "PCPF board",
        "board_type": "scrum",
        "project_key": "PCPF",
        "project_name": "PI Common Platform ",
        "projectId": 10242
    },
    {
        "board_id": 307,
        "board_name": "Around",
        "board_type": "scrum",
        "project_key": "RND",
        "project_name": "Around",
        "projectId": 10279
    },
    {
        "board_id": 255,
        "board_name": "MPE Scrum Board",
        "board_type": "scrum",
        "project_key": "MPE",
        "project_name": "Mobius Platform Engineering",
        "projectId": 10216
    },
    {
        "board_id": 261,
        "board_name": "MBOB board",
        "board_type": "scrum",
        "project_key": "MBOB",
        "project_name": "BoB",
        "projectId": 10225
    },
    {
        "board_id": 262,
        "board_name": "MMONET board",
        "board_type": "scrum",
        "project_key": "MMONET",
        "project_name": "Monet",
        "projectId": 10226
    },
    {
        "board_id": 263,
        "board_name": "MHCY board",
        "board_type": "scrum",
        "project_key": "MHCY",
        "project_name": "Holacracy",
        "projectId": 10227
    },
    {
        "board_id": 264,
        "board_name": "MVINCI board",
        "board_type": "scrum",
        "project_key": "MVINCI",
        "project_name": "Vinci",
        "projectId": 10228
    },
    {
        "board_id": 266,
        "board_name": "MSRE board",
        "board_type": "scrum",
        "project_key": "MSRE",
        "project_name": "SRE",
        "projectId": 10229
    },
    {
        "board_id": 422,
        "board_name": "MF board",
        "board_type": "scrum",
        "project_key": "MF",
        "project_name": "Manifester",
        "projectId": 10353
    },
    {
        "board_id": 304,
        "board_name": "AEGIS board",
        "board_type": "scrum",
        "project_key": "AEGIS",
        "project_name": "Aegis",
        "projectId": 10276
    },
    {
        "board_id": 272,
        "board_name": "M3IN1 board",
        "board_type": "scrum",
        "project_key": "M3IN1",
        "project_name": "3 IN 1",
        "projectId": 10238
    },
    {
        "board_id": 280,
        "board_name": "BU board",
        "board_type": "scrum",
        "project_key": "BU",
        "project_name": "BoB UI",
        "projectId": 10247
    },
    {
        "board_id": 275,
        "board_name": "MSUHAAAS board",
        "board_type": "scrum",
        "project_key": "MSUHAAAS",
        "project_name": "Mobius SUHAaaS",
        "projectId": 10241
    },
    {
        "board_id": 265,
        "board_name": "Kathy's view ",
        "board_type": "scrum",
        "project_key": "MBOB",
        "project_name": "BoB",
        "projectId": 10225
    },
    {
        "board_id": 268,
        "board_name": "VB board",
        "board_type": "scrum",
        "project_key": "VB",
        "project_name": "VINCI BOB",
        "projectId": 10234
    },
    {
        "board_id": 269,
        "board_name": "MON2 board",
        "board_type": "scrum",
        "project_key": "MON2",
        "project_name": "MONET 2.0",
        "projectId": 10235
    },
    {
        "board_id": 305,
        "board_name": "GOF board",
        "board_type": "scrum",
        "project_key": "GOF",
        "project_name": "GoFEMA",
        "projectId": 10277
    },
    {
        "board_id": 306,
        "board_name": "HH board",
        "board_type": "scrum",
        "project_key": "HH",
        "project_name": "Hear, Here!",
        "projectId": 10278
    },
    {
        "board_id": 308,
        "board_name": "MUS board",
        "board_type": "scrum",
        "project_key": "MUS",
        "project_name": "Museo",
        "projectId": 10280
    },
    {
        "board_id": 260,
        "board_name": "MPI board",
        "board_type": "scrum",
        "project_key": "MPI",
        "project_name": "Pascal Intelligence",
        "projectId": 10224
    },
    {
        "board_id": 271,
        "board_name": "PQA board",
        "board_type": "scrum",
        "project_key": "MPQA",
        "project_name": "Mobius Platform QA",
        "projectId": 10237
    },
    {
        "board_id": 309,
        "board_name": "MPRSS board",
        "board_type": "scrum",
        "project_key": "MPRSS",
        "project_name": "ImpressIO",
        "projectId": 10281
    },
    {
        "board_id": 300,
        "board_name": "MOA board",
        "board_type": "scrum",
        "project_key": "MOA",
        "project_name": "Mo Android App",
        "projectId": 10272
    },
    {
        "board_id": 302,
        "board_name": "IZAK board",
        "board_type": "scrum",
        "project_key": "IZAK",
        "project_name": "iZAK",
        "projectId": 10274
    },
    {
        "board_id": 303,
        "board_name": "AM board",
        "board_type": "scrum",
        "project_key": "AM",
        "project_name": "AmplyFund",
        "projectId": 10275
    },
    {
        "board_id": 310,
        "board_name": "CL board",
        "board_type": "scrum",
        "project_key": "CL",
        "project_name": "C-Link",
        "projectId": 10282
    },
    {
        "board_id": 311,
        "board_name": "VOT board",
        "board_type": "scrum",
        "project_key": "VOT",
        "project_name": "VoteIQ",
        "projectId": 10283
    },
    {
        "board_id": 312,
        "board_name": "REVE board",
        "board_type": "scrum",
        "project_key": "REV",
        "project_name": "Revee",
        "projectId": 10284
    },
    {
        "board_id": 313,
        "board_name": "MO board",
        "board_type": "scrum",
        "project_key": "MO",
        "project_name": "MO",
        "projectId": 10285
    },
    {
        "board_id": 283,
        "board_name": "CIO board",
        "board_type": "scrum",
        "project_key": "EDO",
        "project_name": "EDOaaS",
        "projectId": 10250
    },
    {
        "board_id": 372,
        "board_name": "MORR board",
        "board_type": "scrum",
        "project_key": "MORR",
        "project_name": "Mobius on RunRun",
        "projectId": 10307
    },
    {
        "board_id": 385,
        "board_name": "Mobius Website",
        "board_type": "scrum",
        "project_key": "AIDTAAS",
        "project_name": "Mobius Website",
        "projectId": 10321
    },
    {
        "board_id": 386,
        "board_name": "GS board",
        "board_type": "scrum",
        "project_key": "GS",
        "project_name": "Gaian Solutions Website",
        "projectId": 10322
    },
    {
        "board_id": 423,
        "board_name": "AGRI board",
        "board_type": "scrum",
        "project_key": "AGRI",
        "project_name": "Agri Tech",
        "projectId": 10354
    },
    {
        "board_id": 424,
        "board_name": "CHAIN board",
        "board_type": "scrum",
        "project_key": "CHAIN",
        "project_name": "ChainaaS",
        "projectId": 10355
    },
    {
        "board_id": 425,
        "board_name": "MIB board",
        "board_type": "scrum",
        "project_key": "MIB",
        "project_name": "Mobius Intelliboard",
        "projectId": 10356
    },
    {
        "board_id": 426,
        "board_name": "DITA board",
        "board_type": "scrum",
        "project_key": "DITA",
        "project_name": "Darwin Information Typing Architecture",
        "projectId": 10357
    },
    {
        "board_id": 427,
        "board_name": "DITA",
        "board_type": "scrum",
        "project_key": "DITA",
        "project_name": "Darwin Information Typing Architecture",
        "projectId": 10357
    },
    {
        "board_id": 430,
        "board_name": "TTS- SST-LLM",
        "board_type": "scrum",
        "project_key": "AUR",
        "project_name": "Autonomous Robots",
        "projectId": 10352
    },
    {
        "board_id": 342,
        "board_name": "MX board",
        "board_type": "scrum",
        "project_key": "MX",
        "project_name": "Marco XPX",
        "projectId": 10291
    },
    {
        "board_id": 343,
        "board_name": "VX board",
        "board_type": "scrum",
        "project_key": "VX",
        "project_name": "Voxa XPX",
        "projectId": 10292
    },
    {
        "board_id": 345,
        "board_name": "AX board",
        "board_type": "scrum",
        "project_key": "AX",
        "project_name": "AdWize XPX",
        "projectId": 10294
    },
    {
        "board_id": 347,
        "board_name": "SMS board",
        "board_type": "scrum",
        "project_key": "SMS",
        "project_name": "SMS: Subscriber management system XPX",
        "projectId": 10296
    },
    {
        "board_id": 348,
        "board_name": "CMSX board",
        "board_type": "scrum",
        "project_key": "CMS",
        "project_name": "Content management system XPX",
        "projectId": 10297
    },
    {
        "board_id": 349,
        "board_name": "CD board",
        "board_type": "scrum",
        "project_key": "CD",
        "project_name": "CX Delight XPX",
        "projectId": 10298
    },
    {
        "board_id": 352,
        "board_name": "MOBIUS board",
        "board_type": "scrum",
        "project_key": "MOBIUS",
        "project_name": "Mobius GPT 1.0",
        "projectId": 10299
    },
    {
        "board_id": 353,
        "board_name": "XSD board",
        "board_type": "scrum",
        "project_key": "XSD",
        "project_name": "Super Dashboard XPX",
        "projectId": 10300
    },
    {
        "board_id": 366,
        "board_name": "MPI Board_React",
        "board_type": "scrum",
        "project_key": "MPI",
        "project_name": "Pascal Intelligence",
        "projectId": 10224
    },
    {
        "board_id": 367,
        "board_name": "MHCY board_React",
        "board_type": "scrum",
        "project_key": "MHCY",
        "project_name": "Holacracy",
        "projectId": 10227
    },
    {
        "board_id": 368,
        "board_name": "EGCP board",
        "board_type": "scrum",
        "project_key": "EGCP",
        "project_name": "Enterprise grade _ Common Platform _ Contract",
        "projectId": 10303
    },
    {
        "board_id": 369,
        "board_name": "MS board",
        "board_type": "scrum",
        "project_key": "MS",
        "project_name": "Moscribe XPX ",
        "projectId": 10305
    },
    {
        "board_id": 370,
        "board_name": "ITIL/ITSM",
        "board_type": "scrum",
        "project_key": "ITIL",
        "project_name": "ITIL/ISM XPX",
        "projectId": 10293
    },
    {
        "board_id": 376,
        "board_name": "PV board",
        "board_type": "scrum",
        "project_key": "PV",
        "project_name": "Performance V1",
        "projectId": 10311
    },
    {
        "board_id": 379,
        "board_name": "HCM board",
        "board_type": "scrum",
        "project_key": "HCM",
        "project_name": "Horizontal Components MIAs",
        "projectId": 10314
    },
    {
        "board_id": 380,
        "board_name": "STAB board",
        "board_type": "scrum",
        "project_key": "STAB",
        "project_name": "Stability",
        "projectId": 10316
    },
    {
        "board_id": 381,
        "board_name": "DM board",
        "board_type": "scrum",
        "project_key": "DM",
        "project_name": "DevOps Master",
        "projectId": 10317
    },
    {
        "board_id": 382,
        "board_name": "PRA board",
        "board_type": "scrum",
        "project_key": "PRA",
        "project_name": "Product Research & Analysis",
        "projectId": 10318
    },
    {
        "board_id": 383,
        "board_name": "VDM board",
        "board_type": "scrum",
        "project_key": "VDM",
        "project_name": "Visual Design & Marketing",
        "projectId": 10319
    },
    {
        "board_id": 384,
        "board_name": "NXC board",
        "board_type": "scrum",
        "project_key": "NXC",
        "project_name": "Nexus Connect Website",
        "projectId": 10320
    },
    {
        "board_id": 387,
        "board_name": "QGP board",
        "board_type": "scrum",
        "project_key": "QGP",
        "project_name": "Quality Gate | Performance",
        "projectId": 10323
    },
    {
        "board_id": 388,
        "board_name": "MEB board",
        "board_type": "scrum",
        "project_key": "MEB",
        "project_name": "Mobius Engineering Blockers",
        "projectId": 10324
    },
    {
        "board_id": 389,
        "board_name": "BCB board",
        "board_type": "scrum",
        "project_key": "BCB",
        "project_name": "Platform Backend Common Board",
        "projectId": 10325
    },
    {
        "board_id": 398,
        "board_name": "TI",
        "board_type": "scrum",
        "project_key": null,
        "project_name": null,
        "projectId": null
    }
]

const ingestDataInPi = async () => {

    function chunkArray(arr, chunkSize) {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    }
    try {
        for (const board of AllBoards) {
            try {
                const response = await axios.get(
                    `https://${domain}.atlassian.net/rest/agile/1.0/board/${board?.board_id}/sprint?state=active`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
                        },
                    }
                );
                // console.log(response.data);// Print the active sprint data
                const activeSprints = response.data.values
                if (activeSprints.length > 0) {
                    for (const sprint of activeSprints) {
                        console.log("sprint Id", sprint.id)
                        const sprintIssues = await axios.get(`https://${domain}.atlassian.net/rest/agile/1.0/sprint/${sprint.id}/issue?maxResults=200&expand=changelog`,
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": `Basic a2FtYXRoLmFAbW9iaXVzZHRhYXMuYWk6QVRBVFQzeEZmR0YwY3hhcGlodWMxc1NtWDVYTTdOa05vb0l4eDJDaWJ5MnFwbS1yTDNpT2JUTklCUURVakFMVWRUZjhpQ2hBQTYzdE5aeXFUSnBxSDNKSnJ6YXlIOWI2UEtvYktlajdLOUE5dDZaaExtcG9DSXE0ZUxXLXRKVlRDU3lkZTd5Q2JxOVFxQVF6NkdqdnNnRTNRZklwTHVXa28wcHRTX2dZVk1sb1VoY3dfam4zbXRBPTlDOEQ4NkU1` // Use Basic Auth with the encoded token
                                },
                            }
                        )
                        const issues = sprintIssues.data?.issues
                        const issueChunks = chunkArray(issues, 10);
                        for (const issueChunk of issueChunks) {
                            const issuesWithUpdatedFields = await changeIssueFields(issueChunk)
                            try {
                                const ingestData = axios.post(
                                    `https://ig.gov-cloud.ai/tf-entity-ingestion/v1.0/schemas/66ec04f3f604240f96404643/instances?upsert=true`,
                                    issuesWithUpdatedFields, // Data to be sent as the body of the request
                                    {
                                        headers: {
                                            "Content-Type": "application/json",
                                            authorization: `Bearer ${tokenForMIB}`
                                        }
                                    }
                                );
                                console.log(ingestData.data)
                            } catch (error) {
                                console.log(error)
                            }
                        }

                        // console.log(sprintIssues.data, `sprint id ${sprint.id}`)
                    }
                }

            } catch (sprintError) {
                console.error(`Error fetching sprints for board ${board?.board_id}:`, sprintError);
            }
        }
    } catch (error) {
        console.error("Error fetching boards:", error);
    }
}

// To run the function
ingestDataInPi();
