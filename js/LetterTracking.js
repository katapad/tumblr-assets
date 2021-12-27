// Generated by CoffeeScript 1.6.2
(function() {
  var LetterTracking;

  LetterTracking = (function() {
    function LetterTracking($target) {
      var _this = this;

      $target.each(function(i, elem) {
        var $elem, aTag, spanText, text;

        $elem = $(elem);
        aTag = $elem.find('a');
        if (_this.hasATag(aTag)) {
          $elem = aTag;
        }
        text = $elem.text();
        spanText = _this.wrapSpan(text);
        return $elem.html(spanText);
      });
    }

    LetterTracking.prototype.hasATag = function(aTag) {
      return aTag.length > 0;
    };

    LetterTracking.prototype.wrapSpan = function(text) {
      var i, letter, spanText, textLength, _i;

      textLength = text.length;
      spanText = '';
      for (i = _i = 0; 0 <= textLength ? _i <= textLength : _i >= textLength; i = 0 <= textLength ? ++_i : --_i) {
        letter = text.charAt(i);
        if (this.notLast(i, textLength)) {
          spanText += this.getSpan(letter, text.charAt(i + 1));
        } else {
          spanText += letter;
        }
      }
      return spanText;
    };

    LetterTracking.prototype.notLast = function(i, textLength) {
      return i <= textLength - 1;
    };

    LetterTracking.prototype.getSpan = function(letter, nextString) {
      var code, result;

      code = nextString.charCodeAt(0);
      if (this.isKigou(letter.charCodeAt(0))) {
        result = "<span class='kigou'>" + letter + "</span>";
      } else if (this.isHiraganaOrKatakana(code)) {
        result = "<span>" + letter + "</span>";
      } else {
        result = letter;
      }
      return result;
    };

    LetterTracking.prototype.isHiraganaOrKatakana = function(code) {
      return this.hiragana(code) || this.katakana(code) || this.isKigou(code);
    };

    LetterTracking.prototype.hiragana = function(code) {
      return (0x3040 <= code && code <= 0x309f);
    };

    LetterTracking.prototype.katakana = function(code) {
      return (0x30a0 <= code && code <= 0x30ff);
    };

    LetterTracking.prototype.isKigou = function(code) {
      return (12289 <= code && code <= 12290);
    };

    return LetterTracking;

  })();

  window.LetterTracking = LetterTracking;

}).call(this);

/*
//@ sourceMappingURL=LetterTracking.map
*/
