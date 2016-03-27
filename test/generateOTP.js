var otpGenerator = require('../index');
require("should");

describe("OTP Generator Tests", function() {

    it("it should return 10 digit when options is { digits: true, alphabets: false, upperCase: false, specialChars: false }", function(done) {
        var otp = otpGenerator.generate(null, { digits: true, alphabets: false, upperCase: false, specialChars: false });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9]+$/.test(otp).should.equal(true);
        /^[a-zA-Z]+$/.test(otp).should.equal(false);
        /^[#!&@]+$/.test(otp).should.equal(false);
        done();
    });
    
    it("it should return 10 alphabets when options is { digits: false, alphabets: true, upperCase: false, specialChars: false }", function(done) {
        var otp = otpGenerator.generate(null, { digits: false, alphabets: true, upperCase: false, specialChars: false });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9]+$/.test(otp).should.equal(false);
        /^[a-z]+$/.test(otp).should.equal(true);
        /^[A-Z]+$/.test(otp).should.equal(false);
        /^[#!&@]+$/.test(otp).should.equal(false);
        done();
    });
    
    it("it should return 10 uppercase alphabets when options is { digits: false, alphabets: false, upperCase: true, specialChars: false }", function(done) {
        var otp = otpGenerator.generate(null, { digits: false, alphabets: false, upperCase: true, specialChars: false });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9]+$/.test(otp).should.equal(false);
        /^[a-z]+$/.test(otp).should.equal(false);
        /^[A-Z]+$/.test(otp).should.equal(true);
        /^[#!&@]+$/.test(otp).should.equal(false);
        done();
    });
    
    it("it should return 10 specialChars when options is { digits: false, alphabets: false, upperCase: false, specialChars: true }", function(done) {
        var otp = otpGenerator.generate(null, { digits: false, alphabets: false, upperCase: false, specialChars: true });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9]+$/.test(otp).should.equal(false);
        /^[a-z]+$/.test(otp).should.equal(false);
        /^[A-Z]+$/.test(otp).should.equal(false);
        /^[#!&@]+$/.test(otp).should.equal(true);
        done();
    });
    
    it("it should return 10 digits and alphabets when options is { digits: true, alphabets: true, upperCase: false, specialChars: false}", function(done) {
        var otp = otpGenerator.generate(null, { digits: true, alphabets: true, upperCase: false, specialChars: false });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9a-z]+$/.test(otp).should.equal(true);
        /^[A-Z]+$/.test(otp).should.equal(false);
        /^[#!&@]+$/.test(otp).should.equal(false);
        done();
    });
    
    it("it should return 10 digits and alphabets including uppercase when options is { digits: true, alphabets: true, upperCase: true, specialChars: false}", function(done) {
        var otp = otpGenerator.generate(null, { digits: true, alphabets: true, upperCase: true, specialChars: false });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9a-zA-Z]+$/.test(otp).should.equal(true);
        /^[#!&@]+$/.test(otp).should.equal(false);
        done();
    });
    
    it("it should return 10 digits, alphabets including uppercase and specialChars when options is { digits: true, alphabets: true, upperCase: true, specialChars: true}", function(done) {
        var otp = otpGenerator.generate(null, { digits: true, alphabets: true, upperCase: true, specialChars: true });
        console.log(otp);
        otp.length.should.equal(10);
        /^[0-9a-zA-Z#!&@]+$/.test(otp).should.equal(true);
        done();
    });
    
    it("it should return 6 digits, alphabets including uppercase and specialChars when options is { digits: true, alphabets: true, upperCase: true, specialChars: true}", function(done) {
        var otp = otpGenerator.generate(6, { digits: true, alphabets: true, upperCase: true, specialChars: true });
        console.log(otp);
        otp.length.should.equal(6);
        /^[0-9a-zA-Z#!&@]+$/.test(otp).should.equal(true);
        done();
    });
    
});