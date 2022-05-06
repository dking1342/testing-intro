import { expect } from "chai";
import { fetchUser } from "../fetch/async.js"



describe("ASYNC TESTING", () => {
    describe("fetchUser", () => {
        it("user name should be Leanne Graham", async () => {
            const data = await fetchUser();
            expect(data.name).to.equal("Leanne Graham");
        })
    })

    describe("timeout", () => {
        it("should update status", (done) => {
            let status = "loading";
            const fetchData = (callback) => {
                setTimeout(()=> {
                    callback();
                }, 1000);
            }
            fetchData(()=>{
                status = "success"
                expect(status).to.equal("success");
                done();
            })
        })


    })
});

