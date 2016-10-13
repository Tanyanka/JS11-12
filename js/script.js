$(function() {
    var html = $('#famous_person').html(),
        count,
        user = [{

        name: 'Стивен Хокинг',
        avatar: 'img/photo.jpg',
        born: '8 января 1942 г.',
        country: 'Великобритания',
        fields: 'Теоретическая физика, Космология',
        prize: 'Adams Prize (1966), FRS (1974), Eddington Medal (1975), Maxwell Medal and Prize (1976), Heineman Prize (1976), Hughes Medal (1976), Albert Einstein Award (1978), CBE (1982), RAS Gold Medal (1985), Dirac Medal (1987), Wolf Prize (1988), CH (1989), Prince of Asturias Award (1989), Andrew Gemant Award (1998), Naylor Prize and Lectureship (1999), Lilienfeld Prize (1999), Albert Medal (Royal Society of Arts) (1999), Copley Medal (2006), Presidential Medal of Freedom (2009), Fundamental Physics Prize (2012), BBVA Foundation Frontiers of Knowledge Award (2015)'
    },
    {
        phrase1: "Перспектива рано умереть заставила меня понять, что жизнь стоит того, чтобы ее прожить.",
        phrase2: "Там, где есть жизнь, есть надежда.",
        phrase3: "Среди всех систем, которые у нас есть, самые сложные — это наши собственные тела.",
        phrase4: "Очень важно просто не сдаваться.",
        phrase5: "Когда я слышу о коте Шредингера, моя рука тянется к пистолету."
    }];

    var person = tmpl(html, {
        data: user
    });

    $('body').append(person);
});
