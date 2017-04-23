var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/video/7965'

/*
* filterChapters过滤
* */
function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.nano-content').children();
    var courseData = [];
    
    chapters.each(function (item) {
        //每一个章节由标题和下面的多个视频标题组成
        var chapter = $(this);
        var chapterTitle = chapter.find('.sec-title').text();
        var videos = $(this).children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };
        videos.each(function (item) {
            var video = $(this);
            videoTitle = video.find('a').text();
            videoId = video.find('a').attr('href') ? video.find('a').attr('href').split("/")[2] : '';

            chapterData.videos.push({
                titile: videoTitle,
                id: videoId
            })
        });
        courseData.push(chapterData);
    })
    return courseData;
}

/*
* 打印内容
* */
function printCourseData(courseData) {
    courseData.forEach(function (item) {
        item.videos = item.videos.slice(1);   //第一个是空的去掉
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function (item) {
            console.log('【' + item.titile + '】,【' + item.id + '】');
        });
    });
}

http.get(url,function (res) {
    var html = '';
    res.on('data',function (data) {     //有数据事件，拼接html
        html += data;
    });

    res.on('end',function () {
        var courseData = filterChapters(html); //过滤章节
        printCourseData(courseData);
        console.log('it\'done!');
    })
}).on('error',function () {
    console.log('error')
})

