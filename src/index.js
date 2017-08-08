/**
 * Created by apple on 2017/7/28.
 */
import _ from 'lodash';
import './test.less';
//import Print from './print';


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var br = document.createElement('br');

    btn.innerHTML = 'clikcME';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(btn);
  //  btn.onclick = Print.bind(null,'click');
    /*element.classList.add('test');
     btn.innerHTML = 'clickMe';

     element.appendChild(btn);*/

    return element;
}


document.body.appendChild(component());
