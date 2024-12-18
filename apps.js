function BaraShow(){
    let MiniutRate=document.getElementById("MiniutRate").value;
    let KiloRate=document.getElementById("KiloRate").value;
    let Copun=document.getElementById("Copun").value;
    let AllRateShow=document.getElementById("AllRateShow");
    let Minitbara=2;
    let kiloBara=30;
    let TottalBara=MiniutRate*Minitbara+KiloRate*kiloBara;
    
    if(Copun=="sabbir100"){
        TottalBara=TottalBara-100;
    }
    if(Copun=="sabbir50"){
        TottalBara=TottalBara-100;

    }
    if(Copun=="sabbir20"){
        TottalBara=TottalBara-100;
    }
    if(TottalBara<200){
        AllRateShow.innerText=`${TottalBara}BDT`;

    }
    if(TottalBara>=200){
        TottalBara=TottalBara-TottalBara*0.2;
        AllRateShow.innerText=`${TottalBara.toFixed(2)}BDT with discount of 20%`;
    }
    if(TottalBara>=500){
        TottalBara=TottalBara-TottalBara*0.3;
        AllRateShow.innerText=`${TottalBara.toFixed(2)}BDT with discount of 30%`;
    }
    if(TottalBara>=1000){
        TottalBara=TottalBara-TottalBara*0.5;
        AllRateShow.innerText=` ${TottalBara.toFixed(2)}BDT with discount of 50%`;
    }


}
var click=0;
function BmiCalculator(){
    click=click+1;
    if(click==1){
        let BmiWeight=document.getElementById("BmiWeight").value;
        let BmiHeight=document.getElementById("BmiHeight").value;
        let BmiShow=document.getElementById("BmiShow");
        let tottalBmi=BmiWeight/(BmiHeight*BmiHeight);
        BmiShow.innerText=`BMI=${tottalBmi .toFixed(2)}`;
    }
    else{
        click=0;
        location.reload()
    }
}