# style guide
## guide line
* 업무명을 이름으로 사용하지 말고 요소별로 구분할 것 [참조](http://www.richcss.com/)
```
/* bad usage */
site.css
homepage.css
static.css
calendar.css

/* good usage */
/box/block.css
/box/main.css
/box/positioning.css

/element/button.css
/element/colors.css
/element/features.css
/element/fonts.css
/element/forms.css
/element/images.css
/element/list.css

/parts/imports.css
```

## article
* container
  * margin
    * dekstop: 1/12 10/12 1/12
    * mobile(<768px width): 12/12
  * padding
    * 20px
* Heading 1 (제목)
  * line-height: 120%, letter-spacing: 0
  * font
    * desktop: 55px 
    * mobile: 44px
  * margin
    * bottom: 10px
* Heading 2 (부제)
  * margin
    * desktop: 1/12 10/12 1/12
    * mobile: 12/12
    * paragraph
      * margin-left,right: 20px
      * font: 15px, Malgun Gothic, Dotum, Arial, san-serif
      * strong
        * font: bold
* Heading 3
  * line-height: 2.21rem
  * font: 11px
* paragraph
  * margin-left,right: 20px
  * line-height: 180%
  * font: 15px
* link heading
  * line-height: 2.21rem
  * bold, underline
  * font: 15px
* Media
  * desktop: 7/12
  * mobile: 12/12
* Media-description
  * desktop: 5/12
  * align-center
  * 24px Heading line-height:150%
  * spacer
    * font: 1.1rem
    * line-height: 1.87rem
  * paragraph
    * padding: 20px
    * font: 15px
    * line-height: 180%
* spacer
  * margin-bottom: 30px
* picture lists
  * desktop: 3/12
  * mobile: 6/12
  * img
    * margin: auto
    * max-width: 100%
    * height: auto
  * brand
    * font: 1.3rem
    * line-height: 2.21rem
  * product
    * margin-bottm: 20px
    * font: 1.1rem
    * line-height: 1.1rem
  * link heading
    * font: 1.1rem
    * line-height: 1.87rem
    
    