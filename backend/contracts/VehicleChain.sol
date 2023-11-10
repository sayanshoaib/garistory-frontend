// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract VehicleChain {
    enum VehicleServiceType {
        OIL_CHANGE,
        TIRE_ROTATION,
        BRAKE_INSPECTION,
        ENGINE_TUNEUP,
        TRANSMISSION_FLUID_CHANGE,
        COOLANT_FLUSH,
        ALIGNMENT
    }


    struct ServicingData {
        address servicingCenter;
        string ownerEmail;
        string vin;
        string mechanicSignature;
        uint256 costOfService;
        VehicleServiceType[] serviceType;
        VehicleServiceType[] recommendedFutureServices;
        string[] partsUsed;
        uint256 mileage;
        uint256 odometerReading;
        string description;
        uint256 timestamp;
    }


    struct AccidentReport {
        address insuranceCompany;
        string reportId;
        string driverName;
        string driverLicenseNumber;
        uint256 timestamp;
        string location;
        string description;
        string[] witnesses;
        string[] vehicleIds;
        string[] insuranceCompanies;
        bool isProcessed;
    }



    mapping(address => ServicingData[]) servicingHistory;
    mapping(string => ServicingData[]) servicingHistoryByOwnerEmail;
    mapping(address => AccidentReport[]) accidentRepots;

    event servicingRecord (
        address indexed servicingCenter,
        string ownerEmail,
        uint256 indexed vin,
        string mechanicSignature,
        uint256 costOfService,
        VehicleServiceType[] serviceType,
        VehicleServiceType[] recommendedFutureServices,
        string[] partsUsed,
        uint256 mileage,
        uint256 odometerReading,
        string description,
        uint256 timestamp
    );

    event AccidentReportFiled(
        address insuranceCompany,
        string reportId,
        string driverName,
        string driverLicenseNumber,
        uint256 timestamp,
        string location,
        string description,
        string[] witnesses,
        string[] vehicleIds,
        string[] insuranceCompanies,
        bool isProcessed
    );

    function recordServicing(
        string memory _ownerEmail,
        string memory _vin,
        string memory _mechanicSignature,
        uint256 _costOfService,
        VehicleServiceType[] memory _serviceType,
        VehicleServiceType[] memory _recommendedFutureServices,
        string[] memory _partsUsed,
        uint256 _mileage,
        uint256 _odometerReading,
        string memory _description
    ) public {
        ServicingData memory data = ServicingData({
            servicingCenter: msg.sender,
            ownerEmail: _ownerEmail,
            vin: _vin,
            mechanicSignature: _mechanicSignature,
            costOfService: _costOfService,
            serviceType: _serviceType,
            recommendedFutureServices: _recommendedFutureServices,
            partsUsed: _partsUsed,
            mileage: _mileage,
            odometerReading: _odometerReading,
            description: _description,
            timestamp: block.timestamp
        });

        servicingHistory[msg.sender].push(data);
        servicingHistoryByOwnerEmail[_ownerEmail].push(data);

        emit servicingRecord(
            data.servicingCenter,
            data.ownerEmail,
            uint256(keccak256(bytes(data.vin))),
            data.mechanicSignature,
            data.costOfService,
            data.serviceType,
            data.recommendedFutureServices,
            data.partsUsed,
            data.mileage,
            data.odometerReading,
            data.description,
            data.timestamp
        );
    }


    function fileAccidentReport(
        address _insuranceComapany,
        string memory _reportId,
        string memory _driverName,
        string memory _driverLicenseNumber,
        string memory _location,
        string memory _description,
        string[] memory _witnesses,
        string[] memory _vehicleIds,
        string[] memory _insuranceCompanies
    ) public {
        require(bytes(_reportId).length > 0, "Report ID is required");
        require(bytes(_driverName).length > 0, "Driver name is required");
        require(bytes(_driverLicenseNumber).length > 0, "Driver license number is required");
        require(bytes(_location).length > 0, "Location is required");
        require(bytes(_description).length > 0, "Description is required");
        require(_witnesses.length > 0, "At least one witness is required");
        require(_vehicleIds.length > 0, "At least one vehicle ID is required");
        require(_insuranceCompanies.length > 0, "At least one insurance company is required");

        AccidentReport memory newReport = AccidentReport(
            _insuranceComapany,
            _reportId,
            _driverName,
            _driverLicenseNumber,
            block.timestamp,
            _location,
            _description,
            _witnesses,
            _vehicleIds,
            _insuranceCompanies,
            false
        );

        emit AccidentReportFiled(
            newReport.insuranceCompany,
            newReport.reportId,
            newReport.driverName,
            newReport.driverLicenseNumber,
            newReport.timestamp,
            newReport.location,
            newReport.description,
            newReport.witnesses,
            newReport.vehicleIds,
            newReport.insuranceCompanies,
            newReport.isProcessed
        );
    }

    function getServicingHistory(address serviceCenter) public view returns (ServicingData[] memory) {
        return servicingHistory[serviceCenter];
    }

    function getServicingHistoryByOwnerEmail(string memory ownerEmail) public view returns (ServicingData[] memory) {
        return servicingHistoryByOwnerEmail[ownerEmail];
    }


    function getAccidentReports(address insuranceCompany) public view returns (AccidentReport[] memory) {
        return accidentRepots[insuranceCompany];
    }

    function processAccidentReport(address insuranceCompany, string memory reportId) public {
        AccidentReport[] storage reports = accidentRepots[insuranceCompany];
        for (uint256 i = 0; i < reports.length; i++) {
            if (keccak256(bytes(reports[i].reportId)) == keccak256(bytes(reportId))) {
                reports[i].isProcessed = true;
                break;
            }
        }
    }

    function getProcessedAccidentReports(address insuranceCompany) public view returns (AccidentReport[] memory) {
        AccidentReport[] storage reports = accidentRepots[insuranceCompany];
        AccidentReport[] memory processedReports = new AccidentReport[](reports.length);
        uint256 processedCount = 0;
        for (uint256 i = 0; i < reports.length; i++) {
            if (reports[i].isProcessed) {
                processedReports[processedCount] = reports[i];
                processedCount++;
            }
        }
        return processedReports;
    }


}