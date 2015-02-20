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

  <link href="/bootstrap.min.css" rel="stylesheet" media="screen">
  <link href="/bootstrap-responsive.css" rel="stylesheet">
  <link href="/bootstrap.css" rel="stylesheet">

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

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

  <style type="text/css" id="holderjs-style">.holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}</style>
</head>

<body>
  <div>
    <div class="span8">
      <div class="row-fluid">
        <div>
          <h3>Last 10 Tweets:</h3>
          <table class="table table-condensed">
            <tr>
              <td>Tweet Text</td>
              <td>Language</td>
            </tr>
            <%
              @SuppressWarnings("unchecked")
              java.util.List<twitter4j.Status> rtweets  = (java.util.List<twitter4j.Status>) request.getAttribute("rtweets");
              java.util.List<String> langs = (java.util.List<String>) request.getAttribute("langs");
              int count = 0;
              for ( twitter4j.Status tweet : rtweets) {
                String tweetText = tweet.getText();
            %>
            <tr>
              <td><%= tweetText %></td>
              <td><%= langs.get(count++) %></td>
            </tr>
            <%
              }
            %>
          </table>
        </div> <!-- end of the span6 for table-->
      </div> <!-- end of row-fluid for span6 -->
      <div class="row-fluid">
        <div>
          <h3>Last 10 Tweets (Translated):</h3>
          <table class="table table-condensed">
            <tr>
              <td>Tweet Text</td>
            </tr>
            <%
              @SuppressWarnings("unchecked")
              java.util.List<String> translated  = (java.util.List<String>) request.getAttribute("translated");
              for ( String tweet : translated) {
            %>
            <tr>
              <td><%= tweet %></td>
            </tr>
            <%
              }
            %>
          </table>
        </div> <!-- end of the span6 for table-->
      </div> <!-- end of row-fluid for span6 -->
  </div> <!-- end of the container-->
  <script src="/bootstrap-transition.js"></script>
  <script src="/bootstrap-modal.js"></script>
  <script src="/bootstrap-tab.js"></script>
  <script src="/bootstrap-tooltip.js"></script>
  <script src="/bootstrap-popover.js"></script>
  <script src="/bootstrap-button.js"></script>
</body>
</html>