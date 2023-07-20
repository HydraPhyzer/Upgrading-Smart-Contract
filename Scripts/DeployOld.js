const {upgrades,ethers}=require("hardhat")

async function Main(){
    const Old=await ethers.getContractFactory("Old")
    const TempOld=await upgrades.deployProxy(Old,[1],{
        initializer:"Set"
    })
    await TempOld.waitForDeployment()
    console.log("Contract Deployed At : ", await TempOld.getAddress())
}

Main().then(()=>process.exit(0))
.catch((error)=>{
    console.log("Error Occured",error)
    process.exit(1)
})