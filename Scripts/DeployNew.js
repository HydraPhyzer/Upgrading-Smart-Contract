const {upgrades,ethers}=require("hardhat")

async function Main(){
    const New=await ethers.getContractFactory("New")
    const TempNew=await upgrades.upgradeProxy("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",New)
    await TempNew.waitForDeployment()
    console.log("Contract Deployed At : ", await TempNew.getAddress())
    console.log("Upgraded Successfully !")
}

Main().then(()=>process.exit(0))
.catch((error)=>{
    console.log("Error Occured",error)
    process.exit(1)
})