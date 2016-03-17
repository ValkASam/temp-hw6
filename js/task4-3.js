/**
 * Created by Valk on 14.03.16.
 *
 * input вложенный в label (без аттрибута for)
 * до рефакторинга
 */
(function task4() {

    function DomElement() {
        //параметры для создания элемента
        var tag = 'div';
        var clazz = [];
        var attr = [];
        var text = "";
        //родитель элемента
        var parent = null;
        //созданный элемент
        var element = null;

        this.reset = function () {
            tag = 'div';
            clazz = [];
            attr = [];
            text = "";
        };

        this.setTag = function (value) {
            tag = value;
        };

        this.setClazz = function (value) {
            if (value instanceof Array) {
                clazz = value;
            } else {
                clazz = value.split(',');
            }
        };

        this.addClazz = function (value) {
            clazz.push(value);
        };

        this.setAttr = function (value) {
            if (value instanceof Array) {
                attr = value;
            } else {
                attr = value.split(',');
            }
        };

        this.addAttr = function (value) {
            attr.push(value);
        };

        this.setText = function (value) {
            text = value;
        };

        this.setParent = function (value) {
            parent = value;
        };

        this.getElement = function () {
            return element;
        };

        this.createAndPlaceElement = function () {
            element = document.createElement(tag);

            if (clazz != '') {
                element.setAttribute("class", clazz.join(" "));
            }

            attr.forEach(function (attrItem) {
                var attrPair = attrItem.split("=");
                element.setAttribute(attrPair[0], attrPair[1] ? attrPair[1] : ''); //учитываем атрибуты типа hidden, required
            });

            element.innerHTML = text;

            parent.appendChild(element);

            return element;
        };

        this.cloneAndPlaceElement = function (newParent) {
            var elementClone = element.cloneNode(true);
            (newParent ? newParent : parent).appendChild(elementClone);
        }
    }

    var elem = new DomElement();

    //Form
    elem.reset();
    elem.setTag('form');
    elem.setClazz('question-form');
    elem.setAttr('action=#');
    elem.setParent(document.body);
    var form = elem.createAndPlaceElement();

    elem.reset();
    elem.setTag('div');
    elem.setText('Тест по программированию');
    elem.setParent(form);
    elem.createAndPlaceElement();

    elem.reset();
    elem.setTag('ol');
    elem.setClazz('question-list');
    elem.setAttr('type=1');
    var olQuestionList = elem.createAndPlaceElement();

    //Блок Вопрос №1 ...
    elem.reset();
    elem.setTag('li');
    elem.setClazz('question');
    elem.setText('Вопрос №1');
    elem.setParent(olQuestionList);
    var liQuestion = elem.createAndPlaceElement();

    elem.reset();
    elem.setTag('div');
    elem.setClazz('variant__list');
    elem.setParent(liQuestion);
    var ulQuestionList = elem.createAndPlaceElement();

    //Блок Вариант ответа №1 ...
    elem.reset();
    elem.setTag('div');
    elem.setClazz('question__variant');
    elem.setParent(ulQuestionList);
    var liQuestionVariant = elem.createAndPlaceElement();

    elem.reset();
    elem.setTag('label');
    elem.setParent(liQuestionVariant);
    var label = elem.createAndPlaceElement();

    elem.reset();
    elem.setTag('input');
    elem.setAttr(['type=checkbox', 'name=q1v1']);
    elem.setParent(label);
    elem.createAndPlaceElement();

    label.innerHTML = label.innerHTML + "Вариант ответа №1"; //текст ставим после вложенного input

    //... Блок Вариант ответа №1

    //Блок Вариант ответа №2
    var nodeClone = liQuestionVariant.cloneNode(true);
    nodeClone.querySelector('input').setAttribute('name', 'q1v2');
    nodeClone.querySelector('label').childNodes[1].nodeValue = 'Вариант ответа №2';
    ulQuestionList.appendChild(nodeClone);

    //Блок Вариант ответа №3
    nodeClone = liQuestionVariant.cloneNode(true);
    nodeClone.querySelector('input').setAttribute('name', 'q1v3');
    nodeClone.querySelector('label').childNodes[1].nodeValue = 'Вариант ответа №3';
    ulQuestionList.appendChild(nodeClone);

    //... Блок Вопрос №1

    //Блок Вопрос №2 ...
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
    olQuestionList.appendChild(nodeClone);
    //... Блок Вопрос №2

    //Блок Вопрос №3 ...
    nodeClone = liQuestion.cloneNode(true);
    nodeClone.childNodes[0].nodeValue = 'Вопрос №3';
    inputList = nodeClone.querySelectorAll('input');
    inputList[0].setAttribute('name', 'q3v1');
    inputList[0].setAttribute('id', 'q3v1');
    inputList[1].setAttribute('name', 'q3v2');
    inputList[1].setAttribute('id', 'q3v2');
    inputList[2].setAttribute('name', 'q3v3');
    inputList[2].setAttribute('id', 'q3v3');
    labelList = nodeClone.querySelectorAll('label');
    labelList[0].setAttribute('for', 'q3v1');
    labelList[1].setAttribute('for', 'q3v2');
    labelList[2].setAttribute('for', 'q3v3');
    olQuestionList.appendChild(nodeClone);
    //... Блок Вопрос №3

    //Button
    elem.reset();
    elem.setTag('input');
    elem.setAttr('type=submit');
    elem.addAttr('value=Проверить мои результаты');
    elem.setParent(form);
    elem.createAndPlaceElement();
})();