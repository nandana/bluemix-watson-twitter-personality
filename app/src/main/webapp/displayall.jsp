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
  <!-- <img src="http://www.logomaker.com/logo-images/555b7084659959ad.gif"/>
  <a href="http://www.logomaker.com"><img src="http://www.logomaker.com/images/logos.gif" alt="logo design" border="0"/></a> -->

<!-- Modal -->
  <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Send Email</h3>
  </div>
  <div class="modal-body">
    <p>Enter the details below to send the email: </p>
	<form method="post" action="/sendmail">
		<input type="text" placeholder="Enter Receiver Address" name="receiver" class="input-large">
		<input type="text" placeholder="Enter Sender Address" name="sender" class="input-large">
		<p class="muted">Attached here: output.csv</p>
		<input type="submit" class="btn" value="Send">
	</form>
  </div>
  </div>
  <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          
          <a class="brand pull-left" href="/index.html"><em>Twitter Influence Analyzer </em><small>v1.0</small></a>
	  
          <div class="nav-collapse collapse">
           	<form action="/TwitterInfluenceAnalyzer/DispCalc" method="post" class="navbar-form pull-right">
 		<input class="span3" type="text" name="twitter_name" value="" placeholder="Enter Twitter Name" />
		<input type="submit" value="Analyze!" class= "btn btn-info">
  		</form>
          </div><!--/.nav-collapse -->
        </div>
      </div>
  </div>  <!-- end of div for nav bar-->

  <div class="container">
  <div class="well">
  <h2>Influencer List:</h2>
  <h4>Record count: <%= request.getAttribute("totinf") %></h4>
  <div style="background-color:white">
  	<table class="table table-hover table-bordered table-striped">
  	<thead>
  	<tr>
  	<th>Twitter Name</th><th>Mentions</th><th>Followers</th><th>Follower Score</th><th>Retweets</th><th>Retweet Score</th><th>Total Score</th><th></th>
  	</tr>
  	</thead>
  	<tbody>
		<%
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> records  = (List<Map<String, Object>>) request.getAttribute("records");
		for (Map<String, Object> record : records) {
			String twitname = record.get("_id").toString();
			String mcount = record.get("mcount").toString();
			String fcount = record.get("fcount").toString();
			String fscore = record.get("fscore").toString();
			String rtcount = record.get("rtcount").toString();
			String rtscore = record.get("rtscore").toString();
			String totalscore = record.get("totalscore").toString();
			
			// convert values to ints
			int mcount2 = (int) Double.parseDouble(mcount);
			int fcount2 = (int) Double.parseDouble(fcount);
			int fscore2 = (int) Double.parseDouble(fscore);
			int rtcount2 = (int) Double.parseDouble(rtcount);
			int rtscore2  = (int) Double.parseDouble(rtscore);
			int totalscore2 = (int) Double.parseDouble(totalscore);
		%>
	<tr>
		<td><%= twitname %></td>
		<td><%= mcount2 %></td>
		<td><%= fcount2 %></td>
		<td><%= fscore2 %></td>
		<td><%= rtcount2 %></td>
		<td><%= rtscore2 %></td>
		<td><%= totalscore2 %></td>
		<td class="table-form">
			<form action="/TwitterInfluenceAnalyzer/DelSelected" method="post" class="table-form">
			<input type="hidden" value="<%= twitname %>" name="twitname">
			<input type="submit" value="Delete" class="btn btn-warning">
		</form>
		</td>
	</tr>
		<%
		}
		%>
	</tbody>
  	</table>
  </div>
  <br>
  <div style="text-align:center">
  	<div style="text-align:center">
  		<form action="/TwitterInfluenceAnalyzer/ClearAll" method="post">
  		<input type="submit" value="Delete All Records" class="btn btn-danger">
  		</form>
		<!-- Button to trigger modal -->
		<!-- Uncomment this part to use the SMTP service if its available on Bluemix -->
		<!-- <a data-target="#myModal" class="btn btn-primary" data-toggle="modal">Send Records via Email</a> -->
	</div>
  </div>
  </div>
  </div> <!-- end of the container-->
  <script src="/bootstrap-transition.js"></script>
  <script src="/bootstrap-modal.js"></script>
  <script src="/bootstrap-tab.js"></script>
  <script src="/bootstrap-tooltip.js"></script>
  <script src="/bootstrap-popover.js"></script>
  <script src="/bootstrap-button.js"></script>
</body>
</html>