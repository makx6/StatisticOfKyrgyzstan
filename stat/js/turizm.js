function Turizm() {
     document.getElementById("maintxt").innerHTML = "Туризм"
    
    const a = 130;
    const b = 308;
    const c = 310;
    const d = 2601;
    const e = 2894;
    const f = 2893;
    
    const reqNaselenie = 'https://cors-anywhere.herokuapp.com/http://stat.kg/ru/opendata/category/'+a+'/json'




    async function getNaselenie() {
        const response = await fetch(reqNaselenie);
        const data = await response.json();




        titleNaselenie = data.title;
        naselenieNow = data.data[0].values[0].value;
        naseleniePrev = data.data[0].values[1].value




        p1 = naselenieNow - naseleniePrev;
        p1 = Math.ceil(p1 / naseleniePrev * 100);



        document.querySelector('.card:nth-child(1) svg circle:nth-child(2)').style.strokeDashoffset = (440 - (440 * p1) / 100);

        document.getElementById("t1").innerHTML = titleNaselenie;
        document.getElementById("n1").innerHTML = naselenieNow;
        document.getElementById("p1").innerHTML = p1 + '%';
        if (p1 > 0) {
            document.getElementById("p1").style.color = '#32CD32';

        } else {
            document.getElementById("p1").style.color = '#DC143C';
        }

    }

    getNaselenie();







    /*----------UMERLI----UMERLI------UMERLI--*/

   const reqDohod ='https://cors-anywhere.herokuapp.com/http://stat.kg/ru/opendata/category/'+b+'/json'






        async function getDohod() {
        const response = await fetch(reqDohod);
        const data = await response.json();




        titleDohod = data.title;
        

        Dohodnow = data.data[0].values[0].value;
        Dohodprev = data.data[0].values[1].value


        p2 = Dohodnow - Dohodprev;
        p2 = Math.round(p2 / Dohodprev * 100);



        document.querySelector('.card:nth-child(2) svg circle:nth-child(2)').style.strokeDashoffset = (440 - (440 * p2) / 100);

        document.getElementById("t2").innerHTML = titleDohod;
        document.getElementById("n2").innerHTML = Dohodnow;
        document.getElementById("p2").innerHTML = p2 + '%';
        if (p2 > 0) {
            document.getElementById("p2").style.color = '#32CD32';

        } else {
            document.getElementById("p2").style.color = '#DC143C';
        }
    }
    getDohod();







    /*----------RODILIS----RODILIS------RODILIS--*/



    const reqBorn = 'https://cors-anywhere.herokuapp.com/http://stat.kg/ru/opendata/category/'+c+'/json'



    async function getBorn() {
        const response = await fetch(reqBorn);
        const data = await response.json();




        titleBorn = data.title;

        bornNow = data.data[0].values[0].value;
        bornPrev = data.data[0].values[1].value


        p3 = bornNow - bornPrev;
        p3 = Math.ceil(p3 / bornPrev * 100);



        document.querySelector('.card:nth-child(3) svg circle:nth-child(2)').style.strokeDashoffset = (440 - (440 * p3) / 100);

        document.getElementById("t3").innerHTML = titleBorn;
        document.getElementById("n3").innerHTML = bornNow;
        document.getElementById("p3").innerHTML = p3 + '%';
        if (p3 > 0) {
            document.getElementById("p3").style.color = '#32CD32';

        } else {
            document.getElementById("p3").style.color = '#DC143C';
        }
    }
    getBorn();




    /*----------PROD.JIZNI---PROD.JIZNI------PROD.JIZNI--*/




    const reqLife = 'https://cors-anywhere.herokuapp.com/http://stat.kg/ru/opendata/category/'+ d +'/json'



    async function getLife() {
        const response = await fetch(reqLife);
        const data = await response.json();




        titleLife = data.title;
      

        lifeNow = data.data[1].values[0].value;
        lifePrev = data.data[1].values[1].value;




        p4 = lifeNow - lifePrev;
        p4 = Math.ceil(p4 / lifePrev * 100);



        document.querySelector('.card:nth-child(4) svg circle:nth-child(2)').style.strokeDashoffset = (440 - (440 * p4) / 100);

        document.getElementById("t4").innerHTML = titleLife;
        document.getElementById("n4").innerHTML = lifeNow;
        document.getElementById("p4").innerHTML = p4 + '%';
        if (p4 >= 0) {
            document.getElementById("p4").style.color = '#32CD32';

        } else {
            document.getElementById("p4").style.color = '#DC143C';
        }
    }
    getLife();



    /*-----BRAK-----BRAK---BRAK------BRAK--*/


    const reqBrak = 'https://cors-anywhere.herokuapp.com/http://stat.kg/ru/opendata/category/'+e+'/json'



    async function getBrak() {
        const response = await fetch(reqBrak);
        const data = await response.json();




        titleBrak = data.title;

        brakNow = data.data[0].values[0].value;
        brakPrev = data.data[0].values[1].value;




        p5 = brakNow - brakPrev;
        p5 = Math.ceil(p5 / brakPrev * 100);



        document.querySelector('.card:nth-child(5) svg circle:nth-child(2)').style.strokeDashoffset = (440 - (440 * p5) / 100);

        document.getElementById("t5").innerHTML = titleBrak;
        document.getElementById("n5").innerHTML = brakNow;
        document.getElementById("p5").innerHTML = p5 + '%';
        if (p5 >= 0) {
            document.getElementById("p5").style.color = '#32CD32';

        } else {
            document.getElementById("p5").style.color = '#DC143C';
        }
    }
    getBrak();









    /*-----RAZVOD----RAZVOD---RAZVOD------RAZVOD--*/


    const reqRazvod = 'https://cors-anywhere.herokuapp.com/http://stat.kg/ru/opendata/category/'+f+'/json'



    async function getRazvod() {
        const response = await fetch(reqRazvod);
        const data = await response.json();




        titleRazvod = data.title;

        razvodNow = data.data[0].values[0].value;
        razvodPrev = data.data[0].values[1].value;




        p6 = razvodNow - razvodPrev;
        p6 = Math.ceil(p6 / razvodPrev * 100);



        document.querySelector('.card:nth-child(6) svg circle:nth-child(2)').style.strokeDashoffset = (440 - (440 * p6) / 100);

        document.getElementById("t6").innerHTML = titleRazvod;
        document.getElementById("n6").innerHTML = razvodNow;
        document.getElementById("p6").innerHTML = p6 + '%';
        if (p6 >= 0) {
            document.getElementById("p6").style.color = '#32CD32';

        } else {
            document.getElementById("p6").style.color = '#DC143C';
        }
    }
    getRazvod();
}
