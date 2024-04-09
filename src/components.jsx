import {hello, feet2acre, lawn_calc, air_quality, yee_ha, slope_calc} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
      <h2>results</h2>
      <p>feet2acre(43560) == "{feet2acre(1)}"</p>
      <p>feet2acre(87120) == "{feet2acre(2)}"</p>
      <p>feet2acre(130680) == "{feet2acre(3)}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
      <h2>results</h2>
      <p>lawn_calc(2,3,1) == "{lawn_calc(6)}"</p>
      <p>lawn_calc(15,2,5) == "{lawn_calc(6)}"</p>
      <p>lawn_calc(12,7,7) == "{lawn_calc(12)}"</p>
    </section>;
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index:
      <h2>results</h2>
      <p>air_quality(2) == "{air_quality('Good')}"</p>
      <p>air_quality(67) == "{air_quality('Moderate')}"</p>
      <p>air_quality(143) == "{air_quality('Unhealthy for Sensitive Groups')}"</p>
      <p>air_quality(164) == "{air_quality('Unhealthy')}"</p>
      <p>air_quality(214) == "{air_quality('Very Unhealthy')}"</p>
      <p>air_quality(320) == "{air_quality('Hazardous')}"</p>
    </section>;
}

function Question5(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings:
      <h2>results</h2>
      <p>yee_ha(3) == "{yee_ha('Yee')}"</p>
      <p>yee_ha(7) == "{yee_ha('Ha')}"</p>
      <p>yee_ha(21) == "{yee_ha('Yee Ha')}"</p>
      <p>yee_ha(0) == "{yee_ha('Nada')}"</p>
    </section>;
}

function Question6(){
    return <section>
6. Calculate the slope of a line.
      <h2>results</h2>
      <p>slope_calc(6,3) == "{slope_calc('With a rise of 6 and a run of 3, the line has a slope of positive 2')}"</p>
      <p>slope_calc(8,2) == "{slope_calc('With a rise of 6 and a run of 3, the line has a slope of positive 4')}"</p>
      <p>slope_calc(-6,2) == "{slope_calc('With a rise of 6 and a run of 3, the line has a slope of positive -3')}"</p>
    </section>;
}

export {Question1, Question2, Question3, Question4, Question5, Question6}
