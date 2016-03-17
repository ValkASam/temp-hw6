/**
 * Created by Valk on 14.03.16.
 */
(function task4() {
    var parentElem = document.body;
    var insertedElem;

    //insertedElem = document.createElement("<h2></h2>");


    //console.log(parentElem.getElementsByTagName("li"));
    //console.log(parentElem.getElementsByTagName("li")[2].getAttributeNode("hidden"));

    var tagParam = {
        tag: 'div',
        clazz: [],
        attr: [],
        text: "",
        reset: function () {
            this.tag = 'div';
            this.clazz = [];
            this.attr = [];
            this.text = '';
        },
        setTag: function (value) {
            this.tag = value;
        },
        setClazz: function (value) {
            if (value instanceof Array) {
                this.clazz = value;
            } else {
                this.clazz = [value];
            }
        }
    };

    function TagParam() {
        var tag = 'div';
        var clazz = [];
        var attr = [];
        var text = "";

        this.reset = function(){
            tag = 'div';
            clazz = [];
            attr = [];
            text = "";
        };

        this.setTag = function(value) {
            tag = value;
        };

        this.setClazz = function(value) {
            if (value instanceof Array) {
                clazz = value;
            } else {
                clazz = [value];
            }
        };

        this.setAttr = function(value) {
            if (value instanceof Array) {
                attr = value;
            } else {
                attr = [value];
            }
        };

        this.setText = function(value) {
            text = value;
        };

        this.getTag = function() {
            return tag;
        };

        this.getClazz = function() {
            return clazz;
        };

        this.getAttr = function() {
            return attr;
        };

        this.getText = function() {
            return text;
        }
    }


    var tParam = new TagParam();

    tParam.setTag('h1');
    tParam.setText('Тест по программированию');
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    parentElem.appendChild(insertedElem);

    tParam.reset();
    tParam.setTag('ol');
    tParam.setClazz('pole');
    tParam.setAttr('type=1');
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    parentElem.appendChild(insertedElem);
    var olPole=insertedElem;

    tParam.reset();
    tParam.setTag('li');
    tParam.setClazz('question');
    tParam.setText('Вопрос №1');
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    olPole.appendChild(insertedElem);
    var liQuestion = insertedElem;

    tParam.reset();
    tParam.setTag('ul');
    tParam.setClazz('question__list');
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    liQuestion.appendChild(insertedElem);
    var ulQuestionList = insertedElem;

    tParam.reset();
    tParam.setTag('li');
    tParam.setClazz('question__variant');
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    ulQuestionList.appendChild(insertedElem);
    var liQuestionVariant = insertedElem;

    tParam.reset();
    tParam.setTag('input');
    tParam.setAttr(['type=checkbox', 'name=q1v1', 'id=q1v1']);
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    liQuestionVariant.appendChild(insertedElem);

    tParam.reset();
    tParam.setTag('label');
    tParam.setAttr(['for=q1v1']);
    tParam.setText('Вариант ответа №1');
    insertedElem = newElement(tParam);
    console.log(insertedElem);
    liQuestionVariant.appendChild(insertedElem);

    //
    var nodeClone = liQuestionVariant.cloneNode(true);
    nodeClone.querySelector('label').innerHTML = 'Вариант ответа №2';
    nodeClone.querySelector('#q1v1').setAttribute('name', 'q1v2');
    nodeClone.querySelector('#q1v1').setAttribute('id', 'q1v2');
    ulQuestionList.appendChild(nodeClone);
    //
    nodeClone = liQuestionVariant.cloneNode(true);
    nodeClone.querySelector('label').innerHTML = 'Вариант ответа №3';
    nodeClone.querySelector('#q1v1').setAttribute('name', 'q1v3');
    nodeClone.querySelector('#q1v1').setAttribute('id', 'q1v3');
    ulQuestionList.appendChild(nodeClone);
    //

    nodeClone = liQuestion.cloneNode(true);
    nodeClone.childNodes[0].nodeValue = 'Вопрос №2';
    var inputList = nodeClone.querySelectorAll('input');
    inputList[0].setAttribute('name', 'q2v1');
    inputList[0].setAttribute('id', 'q2v1');
    inputList[1].setAttribute('name', 'q2v2');
    inputList[1].setAttribute('id', 'q2v2');
    inputList[2].setAttribute('name', 'q2v3');
    inputList[2].setAttribute('id', 'q2v3');
    var labelList = nodeClone.querySelectorAll('label');
    labelList[0].setAttribute('for', 'q2v1');
    labelList[1].setAttribute('for', 'q2v2');
    labelList[2].setAttribute('for', 'q2v3');
    olPole.appendChild(nodeClone);
    console.log(nodeClone);

    function newElement(tagParam) {
        var element = document.createElement(tagParam.getTag());

        if (!tagParam.getClazz()==='') {
            element.setAttribute("class", tagParam.getClazz().join(" "));
        }

        tagParam.getAttr().forEach(function (attrItem) {
            var attrPair = attrItem.split("=");
            element.setAttribute(attrPair[0], attrPair[1] ? attrPair[1] : ''); //читываем атрибуты типа hidden, required
        });

        element.innerHTML = tagParam.getText();

        return element;
    }

/*
    /!*tagParam.clazz = ["my-class", "my-class-2"];
     tagParam.attr = ["type=checkbox", "my-type=type-1", "hidden", "required"];
     tagParam.text = "qwerty";*!/

    tagParam.reset();
    tagParam.tag = 'h1';
    tagParam.text = "Тест по программированию";
    insertedElem = createElement(tagParam);
    console.log(insertedElem);
    //
    tagParam.reset();
    tagParam.tag = 'ol';
    tagParam.setClazz("pole");
    //tagParam.attr = "type=1";
    insertedElem = createElement(tagParam);
    console.log(insertedElem);

    return;

    insertedElem = createElement(tagParam);
    console.log(insertedElem);

    function createElement(tagParam) {
        var element = document.createElement(tagParam.tag);

        /!*tagParam.clazz.forEach(function (clazz) {
         element.classList.add(clazz);
         });*!/
        //или короче:
        element.setAttribute("class", tagParam.clazz.join(" "));

        tagParam.attr.forEach(function (attrItem) {
            var attrPair = attrItem.split("=");
            element.setAttribute(attrPair[0], attrPair[1] ? attrPair[1] : ''); //читываем атрибуты типа hidden, required
        });

        element.innerHTML = tagParam.text;

        return element;
    }

    */
})();