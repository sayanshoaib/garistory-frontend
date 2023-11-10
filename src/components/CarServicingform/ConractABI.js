const ContractABI = [
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "insuranceCompany",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "reportId",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "driverName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "driverLicenseNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string[]",
                    "name": "witnesses",
                    "type": "string[]"
                },
                {
                    "indexed": false,
                    "internalType": "string[]",
                    "name": "vehicleIds",
                    "type": "string[]"
                },
                {
                    "indexed": false,
                    "internalType": "string[]",
                    "name": "insuranceCompanies",
                    "type": "string[]"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isProcessed",
                    "type": "bool"
                }
            ],
            "name": "AccidentReportFiled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "servicingCenter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "ownerEmail",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "vin",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "mechanicSignature",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "costOfService",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "enum Garistroy.VehicleServiceType[]",
                    "name": "serviceType",
                    "type": "uint8[]"
                },
                {
                    "indexed": false,
                    "internalType": "enum Garistroy.VehicleServiceType[]",
                    "name": "recommendedFutureServices",
                    "type": "uint8[]"
                },
                {
                    "indexed": false,
                    "internalType": "string[]",
                    "name": "partsUsed",
                    "type": "string[]"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mileage",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "odometerReading",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "servicingRecord",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_insuranceComapany",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_reportId",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_driverName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_driverLicenseNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_location",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "_witnesses",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_vehicleIds",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_insuranceCompanies",
                    "type": "string[]"
                }
            ],
            "name": "fileAccidentReport",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "insuranceCompany",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "reportId",
                    "type": "string"
                }
            ],
            "name": "processAccidentReport",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_ownerEmail",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_vin",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_mechanicSignature",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_costOfService",
                    "type": "uint256"
                },
                {
                    "internalType": "enum Garistroy.VehicleServiceType[]",
                    "name": "_serviceType",
                    "type": "uint8[]"
                },
                {
                    "internalType": "enum Garistroy.VehicleServiceType[]",
                    "name": "_recommendedFutureServices",
                    "type": "uint8[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_partsUsed",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_mileage",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_odometerReading",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                }
            ],
            "name": "recordServicing",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "insuranceCompany",
                    "type": "address"
                }
            ],
            "name": "getAccidentReports",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "insuranceCompany",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "reportId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "driverName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "driverLicenseNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string[]",
                            "name": "witnesses",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "vehicleIds",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "insuranceCompanies",
                            "type": "string[]"
                        },
                        {
                            "internalType": "bool",
                            "name": "isProcessed",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Garistroy.AccidentReport[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "insuranceCompany",
                    "type": "address"
                }
            ],
            "name": "getProcessedAccidentReports",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "insuranceCompany",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "reportId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "driverName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "driverLicenseNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "location",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string[]",
                            "name": "witnesses",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "vehicleIds",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "insuranceCompanies",
                            "type": "string[]"
                        },
                        {
                            "internalType": "bool",
                            "name": "isProcessed",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Garistroy.AccidentReport[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "serviceCenter",
                    "type": "address"
                }
            ],
            "name": "getServicingHistory",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "servicingCenter",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "ownerEmail",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "vin",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "mechanicSignature",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "costOfService",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum Garistroy.VehicleServiceType[]",
                            "name": "serviceType",
                            "type": "uint8[]"
                        },
                        {
                            "internalType": "enum Garistroy.VehicleServiceType[]",
                            "name": "recommendedFutureServices",
                            "type": "uint8[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "partsUsed",
                            "type": "string[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mileage",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "odometerReading",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Garistroy.ServicingData[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "ownerEmail",
                    "type": "string"
                }
            ],
            "name": "getServicingHistoryByOwnerEmail",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "servicingCenter",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "ownerEmail",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "vin",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "mechanicSignature",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "costOfService",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum Garistroy.VehicleServiceType[]",
                            "name": "serviceType",
                            "type": "uint8[]"
                        },
                        {
                            "internalType": "enum Garistroy.VehicleServiceType[]",
                            "name": "recommendedFutureServices",
                            "type": "uint8[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "partsUsed",
                            "type": "string[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mileage",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "odometerReading",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Garistroy.ServicingData[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
  ];
  
  export default ContractABI;