 window.onload = function () {
            
            var rsr = Raphael("paper","540","530");
            
            rsr.renderfix();
            //var rsr = Raphael('rsr', '533.000000', '528.000000');

            var circ1 = rsr.circle(215,345,10).attr("fill", "#ff0");
            var circ2 = rsr.circle(350,185,10).attr("fill", "#fF0");

            var start = function () {
              this.lastdx ? this.odx += this.lastdx : this.odx = 0;
              this.lastdy ? this.ody += this.lastdy : this.ody = 0;
              this.animate({"fill-opacity": 0.2}, 500);
            },
            
            move = function (dx, dy) {
                  this.transform("T"+(dx+this.odx)+","+(dy+this.ody));
                  this.lastdx = dx;
                  this.lastdy = dy;
            },
            up = function () {
              this.animate({"fill-opacity": 1}, 500);
            };

            circ1.drag(move, start, up)
            circ2.drag(move, start, up);
    
            
      var rect4375 = rsr.rect(268.87476, 0.67554253, 1.7478302, 528.20941);
      rect4375.attr({y: '0.67554253',x: '268.87476',id: 'rect4375',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4375');
      var rect4377 = rsr.rect(4.3990831, 263.24817, 527.61798, 1.6508169);
      rect4377.attr({y: '263.24817',x: '4.3990831',id: 'rect4377',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4377');
      var rect4383 = rsr.path("m 2.2386007,264.09978 8.2012333,-9.38832 -4.2719375,9.31301 4.5181585,8.64803 z");
      rect4383.attr({id: 'rect4383',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4383');
      var rect4451 = rsr.path("m 532.29252,264.41613 -4.94813,-8.799 8.44745,8.11176 -7.07629,9.84929 z");
      rect4451.attr({id: 'rect4451',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4451');
      var rect4454 = rsr.rect(11.044849, 259.23553, 8.7498837, 7.5875387);
      rect4454.attr({y: '259.23553',x: '11.044849',id: 'rect4454',fill: 'none',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4454');
      var rect4456 = rsr.path("m 269.34754,-0.02756205 9.3421,8.45225435 -9.57269,-4.6935879 -8.37815,4.1204265 z");
      rect4456.attr({id: 'rect4456',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4456');
      var rect4459 = rsr.path("m 269.97168,524.73941 8.48246,-5.18065 -8.51515,8.45226 -9.43569,-7.62764 z");
      rect4459.attr({id: 'rect4459',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect4459');
      var rect4464 = rsr.rect(165.88785, 108.47846, 4.913805, 5.175632);
      rect4464.attr({y: '108.47846',x: '165.88785',id: 'rect4464',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4464.transform("m0.35518511,0.93479599,-0.28266706,0.95921809,0,0").data('id', 'rect4464');
      var rect4486 = rsr.rect(332.17761, -57.577431, 5.0699434, 4.7651072);
      rect4486.attr({y: '-57.577431',x: '332.17761',id: 'rect4486',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4486.transform("m0.34006906,0.94040046,-0.39386322,0.91916906,0,0").data('id', 'rect4486');
      var rect4488 = rsr.rect(211.63736, 66.53286, 4.4246726, 4.5950904);
      rect4488.attr({y: '66.53286',x: '211.63736',id: 'rect4488',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4488.transform("m0.36877653,0.92951809,-0.33766198,0.94126743,0,0").data('id', 'rect4488');
      var rect4490 = rsr.rect(520.33374, -228.19627, 4.9226217, 5.2922778);
      rect4490.attr({y: '-228.19627',x: '520.33374',id: 'rect4490',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4490.transform("m0.41537824,0.90964879,-0.34881642,0.93719107,0,0").data('id', 'rect4490');
      var rect4492 = rsr.rect(101.30007, -395.97781, 4.5465894, 5.044579);
      rect4492.attr({y: '-395.97781',x: '101.30007',id: 'rect4492',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4492.transform("m-0.92324528,0.38421107,-0.92931662,-0.36928393,0,0").data('id', 'rect4492');
      var rect4494 = rsr.rect(436.54745, -168.41933, 5.0428371, 4.518981);
      rect4494.attr({y: '-168.41933',x: '436.54745',id: 'rect4494',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4494.transform("m0.32884317,0.94438454,-0.4278737,0.90383853,0,0").data('id', 'rect4494');
      var rect4496 = rsr.rect(-34.544132, 248.88835, 5.5947299, 5.727109);
      rect4496.attr({y: '248.88835',x: '-34.544132',id: 'rect4496',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4496.transform("m0.31511693,-0.94905285,0.36621086,0.93053189,0,0").data('id', 'rect4496');
      var rect4498 = rsr.rect(505.30209, -244.49826, 5.1934838, 4.5327792);
      rect4498.attr({y: '-244.49826',x: '505.30209',id: 'rect4498',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4498.transform("m0.28920731,0.95726649,-0.39574732,0.91835944,0,0").data('id', 'rect4498');
      var rect4500 = rsr.rect(-136.74141, -410.19885, 4.9603639, 5.5236278);
      rect4500.attr({y: '-410.19885',x: '-136.74141',id: 'rect4500',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4500.transform("m-0.42063415,0.90723035,-0.32547327,-0.94555124,0,0").data('id', 'rect4500');
      var rect4502 = rsr.rect(311.72913, -40.935558, 4.7340207, 4.3480754);
      rect4502.attr({y: '-40.935558',x: '311.72913',id: 'rect4502',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4502.transform("m0.3010522,0.95360766,-0.3656281,0.93076103,0,0").data('id', 'rect4502');
      var rect4504 = rsr.rect(-80.553795, -358.23593, 4.4067278, 5.0031447);
      rect4504.attr({y: '-358.23593',x: '-80.553795',id: 'rect4504',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4504.transform("m-0.48228835,0.87601253,-0.34987977,-0.93679461,0,0").data('id', 'rect4504');
      var rect4506 = rsr.rect(563.4516, -277.78384, 4.5733624, 5.0491428);
      rect4506.attr({y: '-277.78384',x: '563.4516',id: 'rect4506',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4506.transform("m0.39280549,0.91962158,-0.36550008,0.93081131,0,0").data('id', 'rect4506');
      var rect4508 = rsr.rect(617.96252, -323.83441, 4.3458128, 4.9509125);
      rect4508.attr({y: '-323.83441',x: '617.96252',id: 'rect4508',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4508.transform("m0.39831954,0.91724672,-0.31852749,0.94791362,0,0").data('id', 'rect4508');
      var rect4510 = rsr.rect(653.138, -385.18277, 5.302537, 5.2517524);
      rect4510.attr({y: '-385.18277',x: '653.138',id: 'rect4510',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4510.transform("m0.34330632,0.93922349,-0.39413321,0.91905333,0,0").data('id', 'rect4510');
      var rect4512 = rsr.rect(674.46631, -412.2009, 5.0287929, 4.7635622);
      rect4512.attr({y: '-412.2009',x: '674.46631',id: 'rect4512',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4512.transform("m0.34273372,0.93943259,-0.41765098,0.90860754,0,0").data('id', 'rect4512');
      var rect4514 = rsr.rect(720.97205, -454.55939, 5.0085797, 4.9019117);
      rect4514.attr({y: '-454.55939',x: '720.97205',id: 'rect4514',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4514.transform("m0.34603868,0.93822025,-0.39739948,0.91764571,0,0").data('id', 'rect4514');
      var rect4516 = rsr.rect(761.03314, -526.59515, 5.4538994, 4.8228083);
      rect4516.attr({y: '-526.59515',x: '761.03314',id: 'rect4516',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4516.transform("m0.28841159,0.95750653,-0.44992819,0.89306474,0,0").data('id', 'rect4516');
      var rect4518 = rsr.rect(728.2652, -458.07297, 5.1111679, 4.7110772);
      rect4518.attr({y: '-458.07297',x: '728.2652',id: 'rect4518',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4518.transform("m0.38876742,0.92133593,-0.438477,0.89874241,0,0").data('id', 'rect4518');
      var rect4520 = rsr.rect(752.94495, -510.18112, 4.7119083, 4.1336279);
      rect4520.attr({y: '-510.18112',x: '752.94495',id: 'rect4520',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4520.transform("m0.34860352,0.93727028,-0.48567691,0.8741384,0,0").data('id', 'rect4520');
      var rect4522 = rsr.rect(173.12906, -110.21386, 4.522604, 5.077888);
      rect4522.attr({y: '-110.21386',x: '173.12906',id: 'rect4522',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4522.transform("m0.94620939,0.32355493,-0.95853725,0.28496725,0,0").data('id', 'rect4522');
      var rect4524 = rsr.rect(222.28448, -70.522331, 5.4936171, 5.5244427);
      rect4524.attr({y: '-70.522331',x: '222.28448',id: 'rect4524',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4524.transform("m0.92909884,0.3698315,-0.89111071,0.45378596,0,0").data('id', 'rect4524');
      var rect4526 = rsr.rect(242.21446, -46.515423, 4.2643805, 4.7373013);
      rect4526.attr({y: '-46.515423',x: '242.21446',id: 'rect4526',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4526.transform("m0.9287,0.37083193,-0.96675669,0.25569808,0,0").data('id', 'rect4526');
      var rect4528 = rsr.rect(355.07599, 81.471085, 6.7828183, 6.4235897);
      rect4528.attr({y: '81.471085',x: '355.07599',id: 'rect4528',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4528.transform("m0.97558923,0.21960342,-0.94775765,0.31899128,0,0").data('id', 'rect4528');
      var rect4530 = rsr.rect(375.62839, 95.649117, 5.4561224, 5.4900222);
      rect4530.attr({y: '95.649117',x: '375.62839',id: 'rect4530',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4530.transform("m0.96228727,0.2720353,-0.95581095,0.29398203,0,0").data('id', 'rect4530');
      var rect4532 = rsr.rect(367.62515, 78.44294, 5.2811909, 5.2986708);
      rect4532.attr({y: '78.44294',x: '367.62515',id: 'rect4532',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4532.transform("m0.93497637,0.35471,-0.94262983,0.3338398,0,0").data('id', 'rect4532');
      var rect4534 = rsr.rect(412.02979, 108.6609, 4.0546365, 4.8411899);
      rect4534.attr({y: '108.6609',x: '412.02979',id: 'rect4534',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4534.transform("m0.90593863,0.42340902,-0.9471852,0.32068708,0,0").data('id', 'rect4534');
      var rect4536 = rsr.rect(-209.77745, 493.18478, 4.22086, 4.4199305);
      rect4536.attr({y: '493.18478',x: '-209.77745',id: 'rect4536',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4536.transform("m0.94466652,-0.32803227,0.93963108,0.34218919,0,0").data('id', 'rect4536');
      var rect4538 = rsr.rect(546.61584, 245.28317, 4.45857, 4.9327154);
      rect4538.attr({y: '245.28317',x: '546.61584',id: 'rect4538',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4538.transform("m0.92090141,0.38979557,-0.95129358,0.30828645,0,0").data('id', 'rect4538');
      var rect4540 = rsr.rect(558.97766, 267.49207, 4.8315578, 4.8315578);
      rect4540.attr({y: '267.49207',x: '558.97766',id: 'rect4540',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4540.transform("m0.92443033,0.38135098,-0.92443033,0.38135098,0,0").data('id', 'rect4540');
      var rect4542 = rsr.rect(592.39697, 308.73932, 4.4439383, 4.2410779);
      rect4542.attr({y: '308.73932',x: '592.39697',id: 'rect4542',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4542.transform("m0.93138095,0.36404605,-0.91311562,0.40770071,0,0").data('id', 'rect4542');
      var rect4544 = rsr.rect(620.11981, 333.004, 4.7324729, 4.6046991);
      rect4544.attr({y: '333.004',x: '620.11981',id: 'rect4544',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4544.transform("m0.92617184,0.37710175,-0.91514785,0.40311837,0,0").data('id', 'rect4544');
      var rect4546 = rsr.rect(-289.08807, 594.9613, 4.8752947, 4.7043424);
      rect4546.attr({y: '594.9613',x: '-289.08807',id: 'rect4546',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4546.transform("m0.90731082,-0.42046055,0.8868964,0.46196836,0,0").data('id', 'rect4546');
      var rect4548 = rsr.rect(634.39343, 311.71133, 4.3963504, 4.7890491);
      rect4548.attr({y: '311.71133',x: '634.39343',id: 'rect4548',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4548.transform("m0.87946263,0.47596795,-0.92430706,0.38164966,0,0").data('id', 'rect4548');
      var rect4550 = rsr.rect(813.75824, 537.69403, 4.679482, 4.444262);
      rect4550.attr({y: '537.69403',x: '813.75824',id: 'rect4550',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4550.transform("m0.94890004,0.3155768,-0.93481406,0.35513754,0,0").data('id', 'rect4550');
      var rect4552 = rsr.rect(750.76276, 411.30634, 4.3379402, 5.2424326);
      rect4552.attr({y: '411.30634',x: '750.76276',id: 'rect4552',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4552.transform("m0.88332399,0.46876297,-0.95490796,0.29690198,0,0").data('id', 'rect4552');
      var rect4554 = rsr.rect(921.13965, 610.8844, 4.0828834, 4.6574488);
      rect4554.attr({y: '610.8844',x: '921.13965',id: 'rect4554',fill: '#000000',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'});
      rect4554.transform("m0.93140974,0.36397239,-0.96268581,0.27062156,0,0").data('id', 'rect4554');
      var g4237 = rsr.set();
      var rect4323 = rsr.rect(0, 0, 800, 800).attr({x: '0',y: '0',id: 'rect4323',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4309)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'rect4323');
      g4237.attr({'style': 'fill:none;fill-opacity:1;stroke:url(#linearGradient5676);stroke-width:1.00018692;stroke-miterlimit:4;stroke-dasharray:none','id': 'g4237','name': 'g4237'});g4237.transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374");
      var g4239 = rsr.set();
      var path4241 = rsr.path("m 80,0 0,800").attr({id: 'path4241',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4225)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4241');
      var path4243 = rsr.path("m 160,0 0,800").attr({id: 'path4243',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4227)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4243');
      var path4245 = rsr.path("m 240,0 0,800").attr({id: 'path4245',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4229)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4245');
      var path4247 = rsr.path("m 320,0 0,800").attr({id: 'path4247',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4231)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4247');
      var path4249 = rsr.path("m 400,0 0,800").attr({id: 'path4249',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4233)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4249');
      var path4251 = rsr.path("m 480,0 0,800").attr({id: 'path4251',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4235)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4251');
      var path4253 = rsr.path("m 560,0 0,800").attr({id: 'path4253',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4237)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4253');
      var path4255 = rsr.path("m 640,0 0,800").attr({id: 'path4255',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4239)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4255');
      var path4257 = rsr.path("m 720,0 0,800").attr({id: 'path4257',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4241)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4257');
      g4239.attr({'style': 'fill:none;fill-opacity:1;stroke:url(#linearGradient4243);stroke-width:1.00018692;stroke-miterlimit:4;stroke-dasharray:none','id': 'g4239','transformG': 'matrix(0.66819476,0,0,-0.66032002,1.9348966,528.23374)','parent': 'g4237','name': 'g4239'});
      var g4259 = rsr.set();
      var path4261 = rsr.path("m 0,80 800,0").attr({id: 'path4261',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4245)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4261');
      var path4263 = rsr.path("m 0,160 800,0").attr({id: 'path4263',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4247)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4263');
      var path4265 = rsr.path("m 0,240 800,0").attr({id: 'path4265',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4249)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4265');
      var path4267 = rsr.path("m 0,320 800,0").attr({id: 'path4267',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4251)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4267');
      var path4269 = rsr.path("m 0,400 800,0").attr({id: 'path4269',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4253)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4269');
      var path4271 = rsr.path("m 0,480 800,0").attr({id: 'path4271',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4255)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4271');
      var path4273 = rsr.path("m 0,560 800,0").attr({id: 'path4273',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4257)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4273');
      var path4275 = rsr.path("m 0,640 800,0").attr({id: 'path4275',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4259)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4275');
      var path4277 = rsr.path("m 0,720 800,0").attr({id: 'path4277',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4261)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4277');
      g4259.attr({'style': 'fill:none;fill-opacity:1;stroke:url(#linearGradient4263);stroke-width:1.00018692;stroke-miterlimit:4;stroke-dasharray:none','id': 'g4259','transformG': 'matrix(0.66819476,0,0,-0.66032002,1.9348966,528.23374)','parent': 'g4237','name': 'g4259'});
      var g4279 = rsr.set();
      var path4281 = rsr.path("m 40,0 0,800").attr({id: 'path4281',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4265)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4281');
      var path4283 = rsr.path("m 120,0 0,800").attr({id: 'path4283',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4267)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4283');
      var path4285 = rsr.path("m 200,0 0,800").attr({id: 'path4285',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4269)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4285');
      var path4287 = rsr.path("m 280,0 0,800").attr({id: 'path4287',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4271)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4287');
      var path4289 = rsr.path("m 360,0 0,800").attr({id: 'path4289',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4273)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4289');
      var path4291 = rsr.path("m 440,0 0,800").attr({id: 'path4291',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4275)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4291');
      var path4293 = rsr.path("m 520,0 0,800").attr({id: 'path4293',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4277)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4293');
      var path4295 = rsr.path("m 600,0 0,800").attr({id: 'path4295',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4279)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4295');
      var path4297 = rsr.path("m 680,0 0,800").attr({id: 'path4297',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4281)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4297');
      var path4299 = rsr.path("m 760,0 0,800").attr({id: 'path4299',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4283)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4299');
      g4279.attr({'style': 'fill:none;fill-opacity:1;stroke:url(#linearGradient4285);stroke-width:1.00018692;stroke-miterlimit:4;stroke-dasharray:none','id': 'g4279','transformG': 'matrix(0.66819476,0,0,-0.66032002,1.9348966,528.23374)','parent': 'g4237','name': 'g4279'});
      var g4301 = rsr.set();
      var path4303 = rsr.path("m 0,40 800,0").attr({id: 'path4303',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4287)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4303');
      var path4305 = rsr.path("m 0,120 800,0").attr({id: 'path4305',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4289)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4305');
      var path4307 = rsr.path("m 0,200 800,0").attr({id: 'path4307',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4291)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4307');
      var path4309 = rsr.path("m 0,280 800,0").attr({id: 'path4309',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4293)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4309');
      var path4311 = rsr.path("m 0,360 800,0").attr({id: 'path4311',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4295)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4311');
      var path4313 = rsr.path("m 0,440 800,0").attr({id: 'path4313',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4297)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4313');
      var path4315 = rsr.path("m 0,520 800,0").attr({id: 'path4315',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4299)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4315');
      var path4317 = rsr.path("m 0,600 800,0").attr({id: 'path4317',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4301)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4317');
      var path4319 = rsr.path("m 0,680 800,0").attr({id: 'path4319',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4303)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4319');
      var path4321 = rsr.path("m 0,760 800,0").attr({id: 'path4321',parent: 'g4237',fill: 'none',"fill-opacity": '1',stroke: 'url(#linearGradient4305)',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("m0.66819476,0,0,-0.66032002,1.9348966,528.23374").data('id', 'path4321');
      g4301.attr({'style': 'fill:none;fill-opacity:1;stroke:url(#linearGradient4307);stroke-width:1.00018692;stroke-miterlimit:4;stroke-dasharray:none','id': 'g4301','transformG': 'matrix(0.66819476,0,0,-0.66032002,1.9348966,528.23374)','parent': 'g4237','name': 'g4301'});
      

      var rsrGroups = [g4237,g4239,g4259,g4279,g4301];
      g4237.push(
          rect4323
      );
      g4239.push(
          path4241 ,
          path4243 ,
          path4245 ,
          path4247 ,
          path4249 ,
          path4251 ,
          path4253 ,
          path4255 ,
          path4257
      );
      g4259.push(
          path4261 ,
          path4263 ,
          path4265 ,
          path4267 ,
          path4269 ,
          path4271 ,
          path4273 ,
          path4275 ,
          path4277
      );
      g4279.push(
          path4281 ,
          path4283 ,
          path4285 ,
          path4287 ,
          path4289 ,
          path4291 ,
          path4293 ,
          path4295 ,
          path4297 ,
          path4299
      );
      g4301.push(
          path4303 ,
          path4305 ,
          path4307 ,
          path4309 ,
          path4311 ,
          path4313 ,
          path4315 ,
          path4317 ,
          path4319 ,
          path4321
      );
            
            
            var line = rsr.path("M"+(circ1.getBBox().x + 10) + " " + (circ1.getBBox().y + 10)+ " L"+(circ2.getBBox().x + 10) + " "+
                         (circ2.getBBox().y+10)+ " "+ (circ1.getBBox().x + 10) + " " +(circ1.getBBox().y + 10)  + " "+((circ1.getBBox().x + (circ1.getBBox().x - circ2.getBBox().x)*100)+10)+ " " + (( circ1.getBBox().y + (circ1.getBBox().y - circ2.getBBox().y)*100)+10) + " " + (circ2.getBBox().x + 10) + " " + (circ2.getBBox().y + 10)+ " " + ((circ2.getBBox().x - (circ1.getBBox().x - circ2.getBBox().x)*100)+10) + " " + (( circ2.getBBox().y - (circ1.getBBox().y - circ2.getBBox().y) *100)+10)+" Z").attr("fill:", "#f00", "stroke-width:", "4");
            
            setInterval(function(){
                
                line.attr("path", "M"+(circ1.getBBox().x + 10) + " " + (circ1.getBBox().y + 10)+ " L"+(circ2.getBBox().x + 10) + " "+
                         (circ2.getBBox().y+10)+ " "+ (circ1.getBBox().x + 10) + " " +(circ1.getBBox().y + 10)  + " "+((circ1.getBBox().x + (circ1.getBBox().x - circ2.getBBox().x)*100)+10)+ " " + (( circ1.getBBox().y + (circ1.getBBox().y - circ2.getBBox().y)*100)+10) + " " + (circ2.getBBox().x + 10) + " " + (circ2.getBBox().y + 10)+ " " + ((circ2.getBBox().x - (circ1.getBBox().x - circ2.getBBox().x)*100)+10) + " " + (( circ2.getBBox().y - (circ1.getBBox().y - circ2.getBBox().y) *100)+10)+" Z",);
                line.attr({fill: '#f00' });
                console.log(" X : "+circ1.getBBox().x+"     Y = "+ circ1.getBBox().y);

            },1);
         
            
        }