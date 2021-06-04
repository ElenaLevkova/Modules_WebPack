



const arrayScript = [];
const arrayPromise = [];

function loadScript(param1, param2) 
{
    if (typeof(param1) === 'string') {
        loadPush(param1, param2); //рассматриваем вариант, когда первым параметром передается одна ссылка, вторым колбек функция
    }
    if (typeof(param1) === 'array') { //рассматриваем вариант, когда первым параметром передается массив ссылок, вторым колбек функция
        // param1.forEach(element => {
        //     loadPush(param1, param2);
        // });
        arrayPromise = param1.map(el => { //создаем массив всех промисов, которые должны выполнится, после чего будет выполнена колбек функция
            new Promise((resolve, reject) => {
                loadPush(el);
            })
    });
        Promise.all(arrayPromise)
        .then(values => {param2()
        }, reason => {
            console.log(reason);
    })
    if (typeof(param1) === 'function') { //рассматриваем вариант, когда единственным параметром передается сразу колбек функция - из задания не поняла что в этом случае должно произойти

    }
 
};

function loadPush(url, callback = '') { // функция - проверки загружаемого скрипта  на то, что такой уже был загружен ранее; - загрузки скрипта и выполнения колбек функции если она присутствует  
    if (!arrayScript.includes(param1)){
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        if (callback) {
            element.onload = callback;
        }
        document.body.appendChild(element);
        arrayScript.push(url);
    } else {
        console.log(`Скрипт ${url} уже загружен`)
    }
};

