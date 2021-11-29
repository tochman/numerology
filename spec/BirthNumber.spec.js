const BirthNumber = require("../BirthNumber");

describe("BirthNumber", () => {
  subject(() => new BirthNumber($data));
  def("data", { day: 1, month: 1, year: 1970 });
  
  it(() => is.expected.to.be.an.instanceOf(BirthNumber));
  it(() => is.expected.to.respondTo("calculate"));

  it("is expected to be an instance of described class", () => {
    expect($subject).to.be.an.instanceOf(BirthNumber);
  });
  
  describe('Thomas 1971-11-24', () => {
    def("data", { day: 24, month: 11, year: 1971 });
    it('is expected to return 8', () => {
      expect($subject.calculate()).to.equal(8)
    });
  });

  describe('Thadeus 2014-1-3', () => {
    def("data", { day: 3, month: 1, year: 2014 });
    it('is expected to return 11', () => {
      expect($subject.calculate()).to.equal(11)
    });
  });
});
