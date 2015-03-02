<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Twitter Influence Analyzer</title>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
  <meta charset="utf-8">
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">

  <link href="./../bootstrap.min.css" rel="stylesheet" media="screen">
  <link href="./../bootstrap-responsive.css" rel="stylesheet">
  <link href="./../bootstrap.css" rel="stylesheet">
  <link rel="stylesheet" href="./../css/watson-bootstrap-dark.css">
  <link rel="stylesheet" href="./../css/style.css">

  <style type="text/css">
    body {
      padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
    }

    /* Custom container */
    .container-narrow {
      margin: 0 auto;
      max-width: 900px;
      border-style: solid;
      border-color: transparent;
      background-color: #D8D8D8;
      z-index: 9;
      height : 100%;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }

    .container-narrow > hr {
      margin: 30px 0;
    }

    .sidebar-nav {
      padding: 20px 0;
    }

    @media (max-width: 980px) {
      /* Enable use of floated navbar text */
      .navbar-text.pull-right {
        float: none;
        padding-left: 5px;
        padding-right: 5px;
      }
    }

    #myModal .modal-body {
      max-height: 600px;
    }

    #myModal {
      width: 700px; /* SET THE WIDTH OF THE MODAL */
    }

    .table-form {
      vertical-align: middle !important;
      text-align: center !important;
      margin: 0 !important;
    }

  </style>

  <script src="./../js/jquery-1.11.1.min.js"></script>

  <style type="text/css" id="holderjs-style">.holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}</style>
</head>

<body>
  <div>
    <div>
      <div>
        <h1>The results of the personality analysis <br/><small>using IBM Watson services</small></h1>
      </div>

      <div class="row-fluid">
        <div class="form-group row">
          <div class="col-lg-12 col-xs-12">
            <textarea rows="8" required
                      placeholder=""
                      class="content form-control" style="display: none;">
              <%= request.getAttribute("aggregatedText") %>
            </textarea>
            <div class="text-right" style="display: none;">
              <span class="wordsCount small"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div style="display:none;" class="form-group row loading text-center loading">
            <h2>&nbsp;</h2>
            <img src="../images/watson.gif">
          </div>
          <div style="display: none;" class="form-group row error">
            <h2>&nbsp;</h2>
            <div class="well">
              <p class="errorMsg"></p>
            </div>
          </div>
        </div>
        <div style="display: none;" class="results col-lg-12 col-xs-12">
          <h3 style="height: 29px;">Your Personality*</h3>
          <div class="well">
            <div class="summary-div"></div>
            <div style="color: gray" class="text-right">
              <em class="small">*Compared to most people who participated in our surveys.</em>
            </div>
          </div>
        </div>
      </div>
      <div style="display: none;" class="results">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-xs-12">
            <h3>Data Behind Your Personality</h3>
            <div style="display: none;" class="col540px well traits"></div>
          </div>
          <div class="col-lg-7 col-xs-12 col-md-7">
            <h3>Visualization of Personality Data</h3>
            <div id="vizcontainer" class="well"></div>
          </div>
        </div>
      </div>
      <div class="hidden">
        <div id="header-template">
          <div class="row theader">
            <div class="col-lg-5 col-xs-5">
              <span>Name</span>
            </div>
            <div class="col-lg-7 col-xs-7 text-right">
              <span>Value ± Sampling Error</span>
            </div>
          </div>
        </div>
        <div id="trait-template">
          <div class="row">
            <div class="tname col-lg-7 col-xs-7">
              <span></span>
            </div>
            <div class="tvalue col-lg-5 col-xs-5 text-right">
              <span></span>
            </div>
          </div>
        </div>
        <div id="model-template">
          <div class="row">
            <div class="col-lg-12 col-xs-12 text-center">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row-fluid">
        <h3 style="height: 29px;">Tweets that were used in the analysis</h3>
        <div>
          <table class="table table-striped table-bordered table-hover table-condensed">
            <tr>
              <td>#</td>
              <td>Tweet Text</td>
              <td>Language</td>
              <td>English translation</td>
            </tr>
            <%
              @SuppressWarnings("unchecked")
              java.util.List<twitter4j.Status> rtweets  = (java.util.List<twitter4j.Status>) request.getAttribute("rtweets");
              java.util.List<String> translated  = (java.util.List<String>) request.getAttribute("translated");
              java.util.List<String> langs = (java.util.List<String>) request.getAttribute("langs");
              int count = 0;
              for ( twitter4j.Status tweet : rtweets) {
                String tweetText = tweet.getText();
            %>
            <tr>
              <td><%= count + 1 %></td>
              <td><%= tweetText %></td>
              <td><%= langs.get(count) %></td>
              <td><%= translated.get(count++) %></td>
            </tr>
            <%
              }
            %>
          </table>
        </div> <!-- end of the span6 for table-->
      </div> <!-- end of row-fluid for span6 -->
    </div>
    <div id="footer">
      <div class="container">
        Developed by <a href="http://nandana.org">Nandana Mihindukulasooriya</a>, <a href="http://www.oeg-upm.net/">Ontology Engineering Group</a>, Universidad Politécnica de Madrid
      </div>
    </div>
  </div>

  <script src="./../bootstrap-transition.js"></script>
  <script src="./../bootstrap-modal.js"></script>
  <script src="./../bootstrap-tab.js"></script>
  <script src="./../bootstrap-tooltip.js"></script>
  <script src="./../bootstrap-popover.js"></script>
  <script src="./../bootstrap-button.js"></script>
  <script type="text/javascript" src="./../js/d3.v2.min.js"></script>
  <script type="text/javascript" src="./../js/demo.js"></script>
  <script type="text/javascript" src="./../js/personality.js"></script>
  <script type="text/javascript" src="./../js/textsummary.js"></script>

  <script>
    var data = <%= request.getAttribute("personalityInsights") %>;

    var widgetId = 'vizcontainer', // Must match the ID in index.jade
            widgetWidth = 700, widgetHeight = 700, // Default width and height
            personImageUrl = '../images/app.png'; // Can be blank

    // Jquery variables
    var $content = $('.content'),
            $loading = $('.loading'),
            $error = $('.error'),
            $errorMsg = $('.errorMsg'),
            $traits = $('.traits'),
            $results = $('.results');

    $results.show();
    showTraits(data);
    showVizualization(data);
    showTextSummary(data);


    /**
     * Displays the traits received from the
     * Personality Insights API in a table,
     * just trait names and values.
     */
    function showTraits(data) {
      console.log('showTraits()');
      $traits.show();

      var traitList = flatten(data.tree),
              table = $traits;

      table.empty();

      // Header
      $('#header-template').clone().appendTo(table);

      // For each trait
      for (var i = 0; i < traitList.length; i++) {
        var elem = traitList[i];

        var Klass = 'row';
        Klass += (elem.title) ? ' model_title' : ' model_trait';
        Klass += (elem.value === '') ? ' model_name' : '';

        if (elem.value !== '') { // Trait child name
          $('#trait-template').clone()
                  .attr('class', Klass)
                  .find('.tname')
                  .find('span').html(elem.id).end()
                  .end()
                  .find('.tvalue')
                  .find('span').html(elem.value === '' ?  '' : (elem.value + ' (± '+ elem.sampling_error+')'))
                  .end()
                  .end()
                  .appendTo(table);
        } else {
          // Model name
          $('#model-template').clone()
                  .attr('class', Klass)
                  .find('.col-lg-12')
                  .find('span').html(elem.id).end()
                  .end()
                  .appendTo(table);
        }
      }
    }

    /**
     * Construct a text representation for big5 traits crossing, facets and
     * values.
     */
    function showTextSummary(data) {
      console.log('showTextSummary()');
      var paragraphs = [
        assembleTraits(data.tree.children[0]),
        assembleFacets(data.tree.children[0]),
        assembleValues(data.tree.children[2])
      ];
      var div = $('.summary-div');
      div.empty();
      paragraphs.forEach(function(sentences) {
        $('<p></p>').text(sentences.join(' ')).appendTo(div);
      });
    }

    /**
     * Renders the sunburst visualization. The parameter is the tree as returned
     * from the Personality Insights JSON API.
     * It uses the arguments widgetId, widgetWidth, widgetHeight and personImageUrl
     * declared on top of this script.
     */
    function showVizualization(theProfile) {
      console.log('showVizualization()');

      $('#' + widgetId).empty();
      var d3vis = d3.select('#' + widgetId).append('svg:svg');
      var widget = {
        d3vis: d3vis,
        data: theProfile,
        loadingDiv: 'dummy',
        switchState: function() {
          console.log('[switchState]');
        },
        _layout: function() {
          console.log('[_layout]');
        },
        showTooltip: function() {
          console.log('[showTooltip]');
        },
        id: 'SystemUWidget',
        COLOR_PALLETTE: ['#1b6ba2', '#488436', '#d52829', '#F53B0C', '#972a6b', '#8c564b', '#dddddd'],
        expandAll: function() {
          this.vis.selectAll('g').each(function() {
            var g = d3.select(this);
            if (g.datum().parent && // Isn't the root g object.
                    g.datum().parent.parent && // Isn't the feature trait.
                    g.datum().parent.parent.parent) { // Isn't the feature dominant trait.
              g.attr('visibility', 'visible');
            }
          });
        },
        collapseAll: function() {
          this.vis.selectAll('g').each(function() {
            var g = d3.select(this);
            if (g.datum().parent !== null && // Isn't the root g object.
                    g.datum().parent.parent !== null && // Isn't the feature trait.
                    g.datum().parent.parent.parent !== null) { // Isn't the feature dominant trait.
              g.attr('visibility', 'hidden');
            }
          });
        },
        addPersonImage: function(url) {
          if (!this.vis || !url) {
            return;
          }
          var icon_defs = this.vis.append('defs');
          var width = this.dimW,
                  height = this.dimH;

          // The flower had a radius of 640 / 1.9 = 336.84 in the original, now is 3.2.
          var radius = Math.min(width, height) / 16.58; // For 640 / 1.9 -> r = 65
          var scaled_w = radius * 2.46; // r = 65 -> w = 160

          var id = 'user_icon_' + this.id;
          icon_defs.append('pattern')
                  .attr('id', id)
                  .attr('height', 1)
                  .attr('width', 1)
                  .attr('patternUnits', 'objectBoundingBox')
                  .append('image')
                  .attr('width', scaled_w)
                  .attr('height', scaled_w)
                  .attr('x', radius - scaled_w / 2) // r = 65 -> x = -25
                  .attr('y', radius - scaled_w / 2)
                  .attr('xlink:href', url)
                  .attr('opacity', 1.0)
                  .on('dblclick.zoom', null);
          this.vis.append('circle')
                  .attr('r', radius)
                  .attr('stroke-width', 0)
                  .attr('fill', 'url(#' + id + ')');
        }
      };

      widget.dimH = widgetHeight;
      widget.dimW = widgetWidth;
      widget.d3vis.attr('width', widget.dimW).attr('height', widget.dimH);
      widget.d3vis.attr('viewBox', "0 0 " + widget.dimW + ", " + widget.dimH);
      renderChart.call(widget);
      widget.expandAll.call(widget);
      if (personImageUrl)
        widget.addPersonImage.call(widget, personImageUrl);
    }

    /**
     * Returns a 'flattened' version of the traits tree, to display it as a list
     * @return array of {id:string, title:boolean, value:string} objects
     */
    function flatten( /*object*/ tree) {
      var arr = [],
              f = function(t, level) {
                if (!t) return;
                if (level > 0 && (!t.children || level !== 2)) {
                  arr.push({
                    'id': t.name,
                    'title': t.children ? true : false,
                    'value': (typeof (t.percentage) !== 'undefined') ? Math.floor(t.percentage * 100) + '%' : '',
                    'sampling_error': (typeof (t.sampling_error) !== 'undefined') ? Math.floor(t.sampling_error * 100) + '%' : ''
                  });
                }
                if (t.children && t.id !== 'sbh') {
                  for (var i = 0; i < t.children.length; i++) {
                    f(t.children[i], level + 1);
                  }
                }
              };
      f(tree, 0);
      return arr;
    }

  </script>
</body>
</html>