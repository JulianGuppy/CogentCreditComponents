const interpolation = require("./interpolation")
// @ponicode
describe("interpolation.palette", () => {
    test("0", () => {
        let callFunction = () => {
            interpolation.palette("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            interpolation.palette("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            interpolation.palette("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            interpolation.palette(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("interpolation.prop", () => {
    test("0", () => {
        let callFunction = () => {
            interpolation.prop("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            interpolation.prop("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            interpolation.prop("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            interpolation.prop(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("interpolation.screenSize", () => {
    test("0", () => {
        let callFunction = () => {
            interpolation.screenSize("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            interpolation.screenSize("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            interpolation.screenSize("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            interpolation.screenSize(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("interpolation.theme", () => {
    test("0", () => {
        let callFunction = () => {
            interpolation.theme("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            interpolation.theme("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            interpolation.theme("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            interpolation.theme(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
