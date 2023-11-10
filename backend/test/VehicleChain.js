const { expect } = require("chai");

describe("VehicleChain", function () {
  let owner;
  let vehicleChain;

  before(async () => {
    [owner] = await ethers.getSigners();

    const VehicleChain = await ethers.getContractFactory("VehicleChain");
    vehicleChain = await VehicleChain.deploy();
  });

  describe("Record Servicing", () => {
    it("Should record servicing data", async () => {
      const serviceType = [0, 2]; // OIL_CHANGE and BRAKE_INSPECTION
      const mileage = 5000;
      const odometerReading = 60000;

      await vehicleChain.recordServicing(
        "owner@example.com",
        "ABC123",
        "Mechanic Signature",
        100,
        serviceType,
        serviceType,
        ["Part1", "Part2"],
        mileage,
        odometerReading,
        "Description"
      );

      const servicingHistory = await vehicleChain.getServicingHistory(
        owner.address
      );
      expect(servicingHistory).to.have.lengthOf(1);
    });

    it("Should record servicing data for another owner's email", async () => {
      const serviceType = [1, 3]; // TIRE_ROTATION and ENGINE_TUNEUP
      const mileage = 6000;
      const odometerReading = 65000;

      await vehicleChain.recordServicing(
        "another@example.com",
        "XYZ789",
        "Another Mechanic Signature",
        150,
        serviceType,
        serviceType,
        ["Part3", "Part4"],
        mileage,
        odometerReading,
        "Another Description"
      );

      const servicingHistory =
        await vehicleChain.getServicingHistoryByOwnerEmail(
          "another@example.com"
        );
      expect(servicingHistory).to.have.lengthOf(1);
    });
  });

  describe("File Accident Report", () => {
    it("Should file an accident report", async () => {
      const reportId = "12345";
      const driverName = "John Doe";
      const driverLicenseNumber = "ABC123";
      const location = "Accident Location";
      const description = "Accident Description";
      const witnesses = ["Witness1"];
      const vehicleIds = ["Vehicle1"];
      const insuranceCompanies = ["Company1"];

      await vehicleChain.fileAccidentReport(
        owner.address, // Use owner's address as the insurance company
        reportId,
        driverName,
        driverLicenseNumber,
        location,
        description,
        witnesses,
        vehicleIds,
        insuranceCompanies
      );

      const accidentReports = await vehicleChain.getAccidentReports(
        owner.address
      );

      expect(accidentReports).to.have.lengthOf(1);
      const filedReport = accidentReports[1];
      expect(filedReport.reportId).to.equal(reportId);
      expect(filedReport.driverName).to.equal(driverName);
      // Add more validations as needed
    });
  });

  describe("Process Accident Report", () => {
    it("Should process an accident report", async () => {
      const reportId = "12345";
      const driverName = "John Doe";
      const driverLicenseNumber = "ABC123";
      const location = "Accident Location";
      const description = "Accident Description";
      const witnesses = ["Witness1"];
      const vehicleIds = ["Vehicle1"];
      const insuranceCompanies = ["Company1"];

      await vehicleChain.fileAccidentReport(
        owner.address, // Use owner's address as the insurance company
        reportId,
        driverName,
        driverLicenseNumber,
        location,
        description,
        witnesses,
        vehicleIds,
        insuranceCompanies
      );

      await vehicleChain.processAccidentReport(owner.address, reportId);

      const updatedAccidentReports = await vehicleChain.getAccidentReports(
        owner.address
      );
      expect(updatedAccidentReports).to.have.lengthOf(1);
      const updatedReport = updatedAccidentReports[1];

      expect(updatedReport.isProcessed).to.equal(true);
    });
  });
});
