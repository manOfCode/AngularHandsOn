<!DOCTYPE html>
<!-- saved from url=(0076)https://github.com/angular/angular.js/blob/master/src/ngScenario/Scenario.js -->
<html lang="en" class=" is-copy-enabled"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>angular.js/Scenario.js at master · angular/angular.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://github.com/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://github.com/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://github.com/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site"><meta content="summary" name="twitter:card"><meta content="angular/angular.js" name="twitter:title"><meta content="angular.js - HTML enhanced for web apps" name="twitter:description"><meta content="https://avatars0.githubusercontent.com/u/139426?v=3&amp;s=400" name="twitter:image:src">
      <meta content="GitHub" property="og:site_name"><meta content="object" property="og:type"><meta content="https://avatars0.githubusercontent.com/u/139426?v=3&amp;s=400" property="og:image"><meta content="angular/angular.js" property="og:title"><meta content="https://github.com/angular/angular.js" property="og:url"><meta content="angular.js - HTML enhanced for web apps" property="og:description">
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host"><meta content="collector-cdn.github.com" name="octolytics-script-host"><meta content="github" name="octolytics-app-id"><meta content="DFE3ED19:10BB:15585F4:5601A348" name="octolytics-dimension-request_id">
    
    
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param">
<meta content="UR7GxnKTMDyVPj6ZooV8hhhO2ntsY2VDEOkE+g5Ok+rbjdU+6sPI8axT8CfJtoovV7jQN4GUVywrUPgPuPBUYA==" name="csrf-token">
    

    <link crossorigin="anonymous" href="./scenario_files/github-aef3088517c60128e10c5cce8d392985504018745a58a13691f1a278951852bb.css" media="all" rel="stylesheet">
    <link crossorigin="anonymous" href="./scenario_files/github2-508d7ab8a50029170fe437198bb561ecd876a0aa6ef26120d82092d5968ab304.css" media="all" rel="stylesheet">
    
    


    <meta http-equiv="x-pjax-version" content="1e1c5d39dead8e61277f3f949626dabb">

      
  <meta name="description" content="angular.js - HTML enhanced for web apps">
  <meta name="go-import" content="github.com/angular/angular.js git https://github.com/angular/angular.js.git">

  <meta content="139426" name="octolytics-dimension-user_id"><meta content="angular" name="octolytics-dimension-user_login"><meta content="460078" name="octolytics-dimension-repository_id"><meta content="angular/angular.js" name="octolytics-dimension-repository_nwo"><meta content="true" name="octolytics-dimension-repository_public"><meta content="false" name="octolytics-dimension-repository_is_fork"><meta content="460078" name="octolytics-dimension-repository_network_root_id"><meta content="angular/angular.js" name="octolytics-dimension-repository_network_root_nwo">
  <link href="https://github.com/angular/angular.js/commits/master.atom" rel="alternate" title="Recent Commits to angular.js:master" type="application/atom+xml">

  <script type="text/javascript" async="" src="./scenario_files/api.js"></script><meta name="selected-link" value="repo_source" data-pjax-transient="true"><meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event"></head>


  <body class="logged_out  env-production linux vis-public">
    <a href="https://github.com/angular/angular.js/blob/master/src/ngScenario/Scenario.js#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="https://github.com/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="https://github.com/login?return_to=%2Fangular%2Fangular.js%2Ftree%2Fmaster%2Fsrc%2FngScenario" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="https://github.com/angular/angular.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/angular/angular.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text" class="js-site-search-focus js-site-search-field is-clearable chromeless-input" data-hotkey="s" name="q" placeholder="Search" aria-label="Search this repository" data-global-scope-placeholder="Search GitHub" data-repo-scope-placeholder="Search" tabindex="1" autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://github.com/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope="" itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <a href="https://github.com/login?return_to=%2Fangular%2Fangular.js" class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="https://github.com/angular/angular.js/watchers">
    3,937
  </a>

  </li>

  <li>
      <a href="https://github.com/login?return_to=%2Fangular%2Fangular.js" class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="https://github.com/angular/angular.js/stargazers">
      42,678
    </a>

  </li>

  <li>
      <a href="https://github.com/login?return_to=%2Fangular%2Fangular.js" class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="https://github.com/angular/angular.js/network" class="social-count">
      19,123
    </a>
  </li>
</ul>

          <h1 itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="https://github.com/angular" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="https://github.com/angular/angular.js" data-pjax="#js-repo-pjax-container">angular.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-pjax="#js-repo-pjax-container" data-issue-count-url="/angular/angular.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="https://github.com/angular/angular.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item sunken-menu-item selected" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular/angular.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="https://github.com/angular/angular.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /angular/angular.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="https://github.com/angular/angular.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /angular/angular.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="https://github.com/angular/angular.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /angular/angular.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="https://github.com/angular/angular.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /angular/angular.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="https://github.com/angular/angular.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /angular/angular.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="./scenario_files/octocat-spinner-32.gif" width="16">
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open" data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target" value="https://github.com/angular/angular.js.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url " data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target" value="https://github.com/angular/angular.js" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="https://github.com/users/set_protocol?protocol_selector=http&protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="f5fb74fee179a68147b41c145703624c611f2926" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="vW3ATgjFb1r5nW/hatNDXKpXYT7SnQmpD9yrAOr9Ftpn4wmSS5JS+edvN1jAMpXCEO9DecW0TxkEcqG5+DRL1A=="></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="https://github.com/users/set_protocol?protocol_selector=subversion&protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="f5fb74fee179a68147b41c145703624c611f2926" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="iD3DbYfxm+A23NZDhk+MFKJUNSa5FmY3u/JC2tdEqQ00XqssSKfysKD4y/iLNI4LNMrJRk++d3WNr6rsb7lCiw=="></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>

              <a href="https://github.com/angular/angular.js/archive/master.zip" class="btn btn-sm sidebar-button" aria-label="Download the contents of angular/angular.js as a zip file" title="Download the contents of angular/angular.js as a zip file" rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container="">  

<a href="https://github.com/angular/angular.js/blob/8b27c3f064b34532ba99d709cadf09fc4c0cbeab/src/ngScenario/Scenario.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5ad97b6cf3ce060315f88bf1c5d379a6 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w" data-ref="master" title="master" role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax="" aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="https://github.com/angular/angular.js/blob/master/src/ngScenario/Scenario.js#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="https://github.com/angular/angular.js/blob/master/src/ngScenario/Scenario.js#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/g3_v1_0/src/ngScenario/Scenario.js" data-name="g3_v1_0" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="g3_v1_0">
                g3_v1_0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/g3_v1_2/src/ngScenario/Scenario.js" data-name="g3_v1_2" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="g3_v1_2">
                g3_v1_2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/g3_v1_3/src/ngScenario/Scenario.js" data-name="g3_v1_3" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="g3_v1_3">
                g3_v1_3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/g3_v1_4/src/ngScenario/Scenario.js" data-name="g3_v1_4" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="g3_v1_4">
                g3_v1_4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected" href="./scenario_files/scenario.js" data-name="master" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/materialize/src/ngScenario/Scenario.js" data-name="materialize" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="materialize">
                materialize
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/pr-8901/src/ngScenario/Scenario.js" data-name="pr-8901" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pr-8901">
                pr-8901
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/sanitize/src/ngScenario/Scenario.js" data-name="sanitize" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="sanitize">
                sanitize
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/strictDiDocs2/src/ngScenario/Scenario.js" data-name="strictDiDocs2" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="strictDiDocs2">
                strictDiDocs2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/travis-debug-karma-socketio/src/ngScenario/Scenario.js" data-name="travis-debug-karma-socketio" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="travis-debug-karma-socketio">
                travis-debug-karma-socketio
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/v0.9.x/src/ngScenario/Scenario.js" data-name="v0.9.x" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.x">
                v0.9.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/v1.0.x/src/ngScenario/Scenario.js" data-name="v1.0.x" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.x">
                v1.0.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/v1.2.x/src/ngScenario/Scenario.js" data-name="v1.2.x" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.x">
                v1.2.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/v1.3.x/src/ngScenario/Scenario.js" data-name="v1.3.x" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.x">
                v1.3.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open " href="https://github.com/angular/angular.js/blob/v1.4.x/src/ngScenario/Scenario.js" data-name="v1.4.x" data-skip-pjax="true" rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.x">
                v1.4.x
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.5.0-beta.0/src/ngScenario/Scenario.js" data-name="v1.5.0-beta.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.5.0-beta.0">v1.5.0-beta.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.6/src/ngScenario/Scenario.js" data-name="v1.4.6" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.6">v1.4.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.5/src/ngScenario/Scenario.js" data-name="v1.4.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.5">v1.4.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.4/src/ngScenario/Scenario.js" data-name="v1.4.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.4">v1.4.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.3/src/ngScenario/Scenario.js" data-name="v1.4.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.3">v1.4.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.2/src/ngScenario/Scenario.js" data-name="v1.4.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.2">v1.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.1/src/ngScenario/Scenario.js" data-name="v1.4.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.1">v1.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-rc.2/src/ngScenario/Scenario.js" data-name="v1.4.0-rc.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-rc.2">v1.4.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-rc.1/src/ngScenario/Scenario.js" data-name="v1.4.0-rc.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-rc.1">v1.4.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-rc.0/src/ngScenario/Scenario.js" data-name="v1.4.0-rc.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-rc.0">v1.4.0-rc.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.6/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.6" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.6">v1.4.0-beta.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.5/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.5">v1.4.0-beta.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.4/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.4">v1.4.0-beta.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.3/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.3">v1.4.0-beta.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.2/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.2">v1.4.0-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.1/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.1">v1.4.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0-beta.0/src/ngScenario/Scenario.js" data-name="v1.4.0-beta.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0-beta.0">v1.4.0-beta.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.4.0/src/ngScenario/Scenario.js" data-name="v1.4.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.4.0">v1.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.19/src/ngScenario/Scenario.js" data-name="v1.3.19" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.19">v1.3.19</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.18/src/ngScenario/Scenario.js" data-name="v1.3.18" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.18">v1.3.18</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.17/src/ngScenario/Scenario.js" data-name="v1.3.17" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.17">v1.3.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.16/src/ngScenario/Scenario.js" data-name="v1.3.16" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.16">v1.3.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.15/src/ngScenario/Scenario.js" data-name="v1.3.15" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.15">v1.3.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.14/src/ngScenario/Scenario.js" data-name="v1.3.14" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.14">v1.3.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.13/src/ngScenario/Scenario.js" data-name="v1.3.13" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.13">v1.3.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.12/src/ngScenario/Scenario.js" data-name="v1.3.12" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.12">v1.3.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.11/src/ngScenario/Scenario.js" data-name="v1.3.11" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.11">v1.3.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.10/src/ngScenario/Scenario.js" data-name="v1.3.10" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.10">v1.3.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.9/src/ngScenario/Scenario.js" data-name="v1.3.9" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.9">v1.3.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.8/src/ngScenario/Scenario.js" data-name="v1.3.8" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.8">v1.3.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.7/src/ngScenario/Scenario.js" data-name="v1.3.7" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.7">v1.3.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.6/src/ngScenario/Scenario.js" data-name="v1.3.6" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.6">v1.3.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.5/src/ngScenario/Scenario.js" data-name="v1.3.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.5">v1.3.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.4/src/ngScenario/Scenario.js" data-name="v1.3.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.4">v1.3.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.3/src/ngScenario/Scenario.js" data-name="v1.3.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.3">v1.3.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.2/src/ngScenario/Scenario.js" data-name="v1.3.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.2">v1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.1/src/ngScenario/Scenario.js" data-name="v1.3.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.1">v1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-rc.5/src/ngScenario/Scenario.js" data-name="v1.3.0-rc.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-rc.5">v1.3.0-rc.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-rc.4/src/ngScenario/Scenario.js" data-name="v1.3.0-rc.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-rc.4">v1.3.0-rc.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-rc.3/src/ngScenario/Scenario.js" data-name="v1.3.0-rc.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-rc.3">v1.3.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-rc.2/src/ngScenario/Scenario.js" data-name="v1.3.0-rc.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-rc.2">v1.3.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-rc.1/src/ngScenario/Scenario.js" data-name="v1.3.0-rc.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-rc.1">v1.3.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-rc.0/src/ngScenario/Scenario.js" data-name="v1.3.0-rc.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-rc.0">v1.3.0-rc.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.19/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.19" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.19">v1.3.0-beta.19</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.18/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.18" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.18">v1.3.0-beta.18</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.17/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.17" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.17">v1.3.0-beta.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.16/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.16" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.16">v1.3.0-beta.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.15/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.15" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.15">v1.3.0-beta.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.14/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.14" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.14">v1.3.0-beta.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.13/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.13" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.13">v1.3.0-beta.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.12/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.12" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.12">v1.3.0-beta.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.11/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.11" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.11">v1.3.0-beta.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.10/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.10" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.10">v1.3.0-beta.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.9/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.9" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.9">v1.3.0-beta.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.8/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.8" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.8">v1.3.0-beta.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.7/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.7" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.7">v1.3.0-beta.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.6/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.6" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.6">v1.3.0-beta.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.5/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.5">v1.3.0-beta.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.4/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.4">v1.3.0-beta.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.3/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.3">v1.3.0-beta.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.2/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.2">v1.3.0-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0-beta.1/src/ngScenario/Scenario.js" data-name="v1.3.0-beta.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0-beta.1">v1.3.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.3.0/src/ngScenario/Scenario.js" data-name="v1.3.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.3.0">v1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.28/src/ngScenario/Scenario.js" data-name="v1.2.28" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.28">v1.2.28</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.27/src/ngScenario/Scenario.js" data-name="v1.2.27" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.27">v1.2.27</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.26/src/ngScenario/Scenario.js" data-name="v1.2.26" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.26">v1.2.26</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.25/src/ngScenario/Scenario.js" data-name="v1.2.25" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.25">v1.2.25</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.24/src/ngScenario/Scenario.js" data-name="v1.2.24" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.24">v1.2.24</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.23/src/ngScenario/Scenario.js" data-name="v1.2.23" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.23">v1.2.23</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.22/src/ngScenario/Scenario.js" data-name="v1.2.22" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.22">v1.2.22</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.21/src/ngScenario/Scenario.js" data-name="v1.2.21" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.21">v1.2.21</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.20/src/ngScenario/Scenario.js" data-name="v1.2.20" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.20">v1.2.20</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.19/src/ngScenario/Scenario.js" data-name="v1.2.19" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.19">v1.2.19</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.18/src/ngScenario/Scenario.js" data-name="v1.2.18" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.18">v1.2.18</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.17/src/ngScenario/Scenario.js" data-name="v1.2.17" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.17">v1.2.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.16/src/ngScenario/Scenario.js" data-name="v1.2.16" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.16">v1.2.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.15/src/ngScenario/Scenario.js" data-name="v1.2.15" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.15">v1.2.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.14/src/ngScenario/Scenario.js" data-name="v1.2.14" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.14">v1.2.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.13/src/ngScenario/Scenario.js" data-name="v1.2.13" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.13">v1.2.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.12/src/ngScenario/Scenario.js" data-name="v1.2.12" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.12">v1.2.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.11/src/ngScenario/Scenario.js" data-name="v1.2.11" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.11">v1.2.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.10/src/ngScenario/Scenario.js" data-name="v1.2.10" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.10">v1.2.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.9/src/ngScenario/Scenario.js" data-name="v1.2.9" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.9">v1.2.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.8/src/ngScenario/Scenario.js" data-name="v1.2.8" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.8">v1.2.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.7/src/ngScenario/Scenario.js" data-name="v1.2.7" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.7">v1.2.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.6/src/ngScenario/Scenario.js" data-name="v1.2.6" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.6">v1.2.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.5/src/ngScenario/Scenario.js" data-name="v1.2.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.5">v1.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.4/src/ngScenario/Scenario.js" data-name="v1.2.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.4">v1.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.3/src/ngScenario/Scenario.js" data-name="v1.2.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.3">v1.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.2/src/ngScenario/Scenario.js" data-name="v1.2.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.2">v1.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.1/src/ngScenario/Scenario.js" data-name="v1.2.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.1">v1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.0-rc.3/src/ngScenario/Scenario.js" data-name="v1.2.0-rc.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.0-rc.3">v1.2.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.0-rc.2/src/ngScenario/Scenario.js" data-name="v1.2.0-rc.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.0-rc.2">v1.2.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.0rc1/src/ngScenario/Scenario.js" data-name="v1.2.0rc1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.0rc1">v1.2.0rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.2.0/src/ngScenario/Scenario.js" data-name="v1.2.0" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.2.0">v1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.1.5/src/ngScenario/Scenario.js" data-name="v1.1.5" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.1.5">v1.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.1.4/src/ngScenario/Scenario.js" data-name="v1.1.4" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.1.4">v1.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.1.3/src/ngScenario/Scenario.js" data-name="v1.1.3" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.1.3">v1.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.1.2/src/ngScenario/Scenario.js" data-name="v1.1.2" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.1.2">v1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="https://github.com/angular/angular.js/tree/v1.1.1/src/ngScenario/Scenario.js" data-name="v1.1.1" data-skip-pjax="true" rel="nofollow" class="js-navigation-open select-menu-item-text css-truncate-target" title="v1.1.1">v1.1.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="https://github.com/angular/angular.js/find/master" class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw" data-pjax="" data-hotkey="t" aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/angular/angular.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">angular.js</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/angular/angular.js/tree/master/src" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/angular/angular.js/tree/master/src/ngScenario" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">ngScenario</span></a></span><span class="separator">/</span><strong class="final-path">Scenario.js</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@lucastetreault" class="avatar" height="24" src="./scenario_files/7095337" width="24">
        <span class="author"><a href="https://github.com/lucastetreault" rel="contributor">lucastetreault</a></span>
        <time datetime="2015-09-12T16:17:11Z" is="relative-time" title="Sep 12, 2015, 9:47 PM GMT+5:30">10 days ago</time>
        <div class="commit-title">
            <a href="https://github.com/angular/angular.js/commit/24cd70058d081b93061734aec29e05f9e37abb3a" class="message" data-pjax="true" title="refactor(*): use `isDefined` and `isUndefined` consistently

Fix any place that compares with `undefined` to use `isUndefined` and `isDefined` instead.

Closes #4365
Closes #12831">refactor(*): use `isDefined` and `isUndefined` consistently</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="https://github.com/angular/angular.js/blob/master/src/ngScenario/Scenario.js#blob_contributors_box" rel="facebox">
          <strong>14</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="hzoo" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=hzoo"><img alt="@hzoo" class="avatar" height="20" src="./scenario_files/588473" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="IgorMinar" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=IgorMinar"><img alt="@IgorMinar" class="avatar" height="20" src="./scenario_files/216296" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vojtajina" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=vojtajina"><img alt="@vojtajina" class="avatar" height="20" src="./scenario_files/46647" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="petebacondarwin" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=petebacondarwin"><img alt="@petebacondarwin" class="avatar" height="20" src="./scenario_files/15655" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andimarek" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=andimarek"><img alt="@andimarek" class="avatar" height="20" src="./scenario_files/1706744" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mhevery" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=mhevery"><img alt="@mhevery" class="avatar" height="20" src="./scenario_files/111951" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pborreli" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=pborreli"><img alt="@pborreli" class="avatar" height="20" src="./scenario_files/77759" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mzgol" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=mzgol"><img alt="@mzgol" class="avatar" height="20" src="./scenario_files/1758366" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lucastetreault" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=lucastetreault"><img alt="@lucastetreault" class="avatar" height="20" src="./scenario_files/7095337(1)" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rzschech" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=rzschech"><img alt="@rzschech" class="avatar" height="20" src="./scenario_files/1156716" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hsablonniere" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=hsablonniere"><img alt="@hsablonniere" class="avatar" height="20" src="./scenario_files/236342" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rodyhaddad" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=rodyhaddad"><img alt="@rodyhaddad" class="avatar" height="20" src="./scenario_files/1331190" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="esarbanis" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=esarbanis"><img alt="@esarbanis" class="avatar" height="20" src="./scenario_files/633903" width="20"> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="realityking" href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js?author=realityking"><img alt="@realityking" class="avatar" height="20" src="./scenario_files/628508" width="20"> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@hzoo" height="24" src="./scenario_files/588473(1)" width="24">
            <a href="https://github.com/hzoo">hzoo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@IgorMinar" height="24" src="./scenario_files/216296(1)" width="24">
            <a href="https://github.com/IgorMinar">IgorMinar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vojtajina" height="24" src="./scenario_files/46647(1)" width="24">
            <a href="https://github.com/vojtajina">vojtajina</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@petebacondarwin" height="24" src="./scenario_files/15655(1)" width="24">
            <a href="https://github.com/petebacondarwin">petebacondarwin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andimarek" height="24" src="./scenario_files/1706744(1)" width="24">
            <a href="https://github.com/andimarek">andimarek</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mhevery" height="24" src="./scenario_files/111951(1)" width="24">
            <a href="https://github.com/mhevery">mhevery</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pborreli" height="24" src="./scenario_files/77759(1)" width="24">
            <a href="https://github.com/pborreli">pborreli</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mzgol" height="24" src="./scenario_files/1758366(1)" width="24">
            <a href="https://github.com/mzgol">mzgol</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lucastetreault" height="24" src="./scenario_files/7095337" width="24">
            <a href="https://github.com/lucastetreault">lucastetreault</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rzschech" height="24" src="./scenario_files/1156716(1)" width="24">
            <a href="https://github.com/rzschech">rzschech</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hsablonniere" height="24" src="./scenario_files/236342(1)" width="24">
            <a href="https://github.com/hsablonniere">hsablonniere</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rodyhaddad" height="24" src="./scenario_files/1331190(1)" width="24">
            <a href="https://github.com/rodyhaddad">rodyhaddad</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@esarbanis" height="24" src="./scenario_files/633903(1)" width="24">
            <a href="https://github.com/esarbanis">esarbanis</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@realityking" height="24" src="./scenario_files/628508(1)" width="24">
            <a href="https://github.com/realityking">realityking</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="https://github.com/angular/angular.js/raw/master/src/ngScenario/Scenario.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="https://github.com/angular/angular.js/blame/master/src/ngScenario/Scenario.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="https://github.com/angular/angular.js/commits/master/src/ngScenario/Scenario.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      328 lines (299 sloc)
      <span class="file-info-divider"></span>
    9.45 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tbody><tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Setup file for the Scenario.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Must be first in the compilation/bootstrap list.</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Public namespace</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">angular.scenario <span class="pl-k">=</span> angular.scenario <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Expose jQuery (e.g. for custom dsl extensions).</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">angular.scenario.jQuery <span class="pl-k">=</span> _jQuery;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Defines a new output format.</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {string} name the name of the new output format</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {function()} fn function(context, runner) that generates the output</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">angular.scenario.output <span class="pl-k">=</span> angular.scenario.output <span class="pl-k">||</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">  angular.scenario.output[name] <span class="pl-k">=</span> fn;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Defines a new DSL statement. If your factory function returns a Future</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * it's returned, otherwise the result is assumed to be a map of functions</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * for chaining. Chained functions are subject to the same rules.</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Note: All functions on the chain are bound to the chain scope so values</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   set on "this" in your statement function are available in the chained</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   functions.</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {string} name The name of the statement</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {function()} fn Factory function(), return a function for</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  the statement.</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">angular.scenario.dsl <span class="pl-k">=</span> angular.scenario.dsl <span class="pl-k">||</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">  angular.scenario.dsl[name] <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* jshint -W040 *//* The dsl binds `this` for us when calling chained functions */</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">executeStatement</span>(<span class="pl-smi">statement</span>, <span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> result <span class="pl-k">=</span> statement.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (angular.isFunction(result) <span class="pl-k">||</span> result <span class="pl-k">instanceof</span> angular.scenario.Future) {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> chain <span class="pl-k">=</span> angular.extend({}, result);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      angular.forEach(chain, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (angular.isFunction(value)) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">          chain[name] <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> executeStatement.<span class="pl-c1">call</span>(self, value, arguments);</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">          chain[name] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> chain;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> statement <span class="pl-k">=</span> fn.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, arguments);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> executeStatement.<span class="pl-c1">call</span>(<span class="pl-v">this</span>, statement, arguments);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Defines a new matcher for use with the expects() statement. The value</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * this.actual (like in Jasmine) is available in your matcher to compare</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * against. Your function should return a boolean. The future is automatically</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * created for you.</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {string} name The name of the matcher</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {function()} fn The matching function(expected).</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">angular.scenario.matcher <span class="pl-k">=</span> angular.scenario.matcher <span class="pl-k">||</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  angular.scenario.matcher[name] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">expected</span>) {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> description <span class="pl-k">=</span> <span class="pl-v">this</span>.future.<span class="pl-c1">name</span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">                      (<span class="pl-v">this</span>.inverse <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">'</span> not <span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span>) <span class="pl-k">+</span> name <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span> <span class="pl-k">+</span> angular.toJson(expected);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    <span class="pl-v">this</span>.addFuture(<span class="pl-s"><span class="pl-pds">'</span>expect <span class="pl-pds">'</span></span> <span class="pl-k">+</span> description,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">done</span>) {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> error;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        self.actual <span class="pl-k">=</span> self.future.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((self.inverse <span class="pl-k">&amp;&amp;</span> fn.<span class="pl-c1">call</span>(self, expected)) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">            (<span class="pl-k">!</span>self.inverse <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>fn.<span class="pl-c1">call</span>(self, expected))) {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">          error <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>expected <span class="pl-pds">'</span></span> <span class="pl-k">+</span> description <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">'</span> but was <span class="pl-pds">'</span></span> <span class="pl-k">+</span> angular.toJson(self.actual);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        done(error);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Initialize the scenario runner and run !</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Access global window and document object</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Access $runner through closure</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {Object=} config Config options</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">angular.scenario</span>.<span class="pl-en">setUpAndRun</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">config</span>) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> href <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> body <span class="pl-k">=</span> _jQuery(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> output <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> objModel <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">angular.scenario</span>.ObjectModel($runner);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (config <span class="pl-k">&amp;&amp;</span> config.scenario_output) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">    output <span class="pl-k">=</span> config.scenario_output.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">'</span>,<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">  angular.forEach(angular.scenario.output, <span class="pl-k">function</span>(<span class="pl-smi">fn</span>, <span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>output.<span class="pl-c1">length</span> <span class="pl-k">||</span> output.<span class="pl-c1">indexOf</span>(name) <span class="pl-k">!=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> context <span class="pl-k">=</span> body.append(<span class="pl-s"><span class="pl-pds">'</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">'</span></span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">'</span>div:last<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">      context.attr(<span class="pl-s"><span class="pl-pds">'</span>id<span class="pl-pds">'</span></span>, name);</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">      fn.<span class="pl-c1">call</span>({}, context, $runner, objModel);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>http<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(href) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>https<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(href)) {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    body.append(<span class="pl-s"><span class="pl-pds">'</span>&lt;p id="system-error"&gt;&lt;/p&gt;<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">    body.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">'</span>#system-error<span class="pl-pds">'</span></span>).<span class="pl-c1">text</span>(</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">'</span>Scenario runner must be run using http or https. The protocol <span class="pl-pds">'</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">      href.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">'</span>:<span class="pl-pds">'</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>:// is not supported.<span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">    );</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> appFrame <span class="pl-k">=</span> body.append(<span class="pl-s"><span class="pl-pds">'</span>&lt;div id="application"&gt;&lt;/div&gt;<span class="pl-pds">'</span></span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">'</span>#application<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> application <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">angular.scenario</span>.Application(appFrame);</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">  $runner.on(<span class="pl-s"><span class="pl-pds">'</span>RunnerEnd<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">    appFrame.css(<span class="pl-s"><span class="pl-pds">'</span>display<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>none<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">    appFrame.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">'</span>iframe<span class="pl-pds">'</span></span>).attr(<span class="pl-s"><span class="pl-pds">'</span>src<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>about:blank<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">  $runner.on(<span class="pl-s"><span class="pl-pds">'</span>RunnerError<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-en">console</span>) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">console</span><span class="pl-c1">.log</span>(formatException(error));</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Do something for IE</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">alert</span>(error);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">  $runner.run(application);</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Iterates through list with iterator function that must call the</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * continueFunction to continue iterating.</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {Array} list list to iterate over</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {function()} iterator Callback function(value, continueFunction)</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {function()} done Callback function(error, result) called when</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   iteration finishes or an error occurs.</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">asyncForEach</span>(<span class="pl-smi">list</span>, <span class="pl-smi">iterator</span>, <span class="pl-smi">done</span>) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">loop</span>(<span class="pl-smi">error</span>, <span class="pl-smi">index</span>) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (index <span class="pl-k">&amp;&amp;</span> index <span class="pl-k">&gt;</span> i) {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">      i <span class="pl-k">=</span> index;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (error <span class="pl-k">||</span> i <span class="pl-k">&gt;=</span> list.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      done(error);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        iterator(list[i<span class="pl-k">++</span>], loop);</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        done(e);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">  loop();</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Formats an exception into a string with the stack trace, but limits</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * to a specific line length.</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {Object} error The exception to format, can be anything throwable</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {Number=} [maxStackLines=5] max lines of the stack trace to include</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  default is 5.</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">formatException</span>(<span class="pl-smi">error</span>, <span class="pl-smi">maxStackLines</span>) {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">  maxStackLines <span class="pl-k">=</span> maxStackLines <span class="pl-k">||</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> message <span class="pl-k">=</span> error.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (error.stack) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> stack <span class="pl-k">=</span> error.stack.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-cce">\n</span><span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (stack[<span class="pl-c1">0</span>].<span class="pl-c1">indexOf</span>(message) <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">      maxStackLines<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">      stack.<span class="pl-c1">unshift</span>(error.message);</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">    message <span class="pl-k">=</span> stack.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, maxStackLines).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-cce">\n</span><span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> message;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Returns a function that gets the file name and line number from a</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * location in the stack if available based on the call site.</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Note: this returns another function because accessing .stack is very</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * expensive in Chrome.</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {Number} offset Number of stack lines to skip</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">callerFile</span>(<span class="pl-smi">offset</span>) {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> error <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>();</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> line <span class="pl-k">=</span> (error.stack <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-cce">\n</span><span class="pl-pds">'</span></span>)[offset];</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Clean up the stack trace line</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (line) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (line.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">'</span>@<span class="pl-pds">'</span></span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Firefox</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        line <span class="pl-k">=</span> line.<span class="pl-c1">substring</span>(line.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">'</span>@<span class="pl-pds">'</span></span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Chrome</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        line <span class="pl-k">=</span> line.<span class="pl-c1">substring</span>(line.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">'</span>(<span class="pl-pds">'</span></span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>).<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">'</span>)<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> line <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Don't use the jQuery trigger method since it works incorrectly.</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * jQuery notifies listeners and then changes the state of a checkbox and</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * does not create a real browser event. A real click changes the state of</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * the checkbox and then notifies listeners.</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * To work around this we instead use our own handler that fires a real event.</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// We need a handle to the original trigger function for input tests.</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> parentTrigger <span class="pl-k">=</span> fn._originalTrigger <span class="pl-k">=</span> fn.trigger;</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">fn</span>.<span class="pl-en">trigger</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>(click<span class="pl-k">|</span>change<span class="pl-k">|</span>keydown<span class="pl-k">|</span>blur<span class="pl-k">|</span>input<span class="pl-k">|</span>mousedown<span class="pl-k">|</span>mouseup)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(type)) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> processDefaults <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.each(<span class="pl-k">function</span>(<span class="pl-smi">index</span>, <span class="pl-smi">node</span>) {</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        processDefaults.<span class="pl-c1">push</span>(browserTrigger(node, type));</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// this is not compatible with jQuery - we return an array of returned values,</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// so that scenario runner know whether JS code has preventDefault() of the event or not...</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> processDefaults;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> parentTrigger.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, arguments);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">})(_jQuery.fn);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Finds all bindings with the substring match of name and returns an</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * array of their values.</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> {string} bindExp The name to match</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@return</span> {Array.&lt;string&gt;} String of binding values</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">_jQuery.fn</span>.<span class="pl-en">bindings</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">windowJquery</span>, <span class="pl-smi">bindExp</span>) {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> result <span class="pl-k">=</span> [], match,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">      bindSelector <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>.ng-binding:visible<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (angular.isString(bindExp)) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">    bindExp <span class="pl-k">=</span> bindExp.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">match</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">actualExp</span>) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (actualExp) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">        actualExp <span class="pl-k">=</span> actualExp.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (actualExp <span class="pl-k">==</span> bindExp) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (actualExp.<span class="pl-c1">indexOf</span>(bindExp) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> actualExp.<span class="pl-c1">charAt</span>(bindExp.<span class="pl-c1">length</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">'</span>|<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (bindExp) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">match</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">actualExp</span>) {</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> actualExp <span class="pl-k">&amp;&amp;</span> bindExp.<span class="pl-c1">exec</span>(actualExp);</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">match</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">actualExp</span>) {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">!!</span>actualExp;</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> selection <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">find</span>(bindSelector);</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-v">this</span>.is(bindSelector)) {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">    selection <span class="pl-k">=</span> selection.<span class="pl-c1">add</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">push</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (angular.isUndefined(value)) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">      value <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> value <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">'</span>string<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">      value <span class="pl-k">=</span> angular.toJson(value);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">    result.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span> <span class="pl-k">+</span> value);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">  selection.each(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> element <span class="pl-k">=</span> windowJquery(<span class="pl-v">this</span>),</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        bindings;</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (bindings <span class="pl-k">=</span> element.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>$binding<span class="pl-pds">'</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> expressions <span class="pl-k">=</span> [], binding, j<span class="pl-k">=</span><span class="pl-c1">0</span>, jj<span class="pl-k">=</span>bindings.<span class="pl-c1">length</span>; j <span class="pl-k">&lt;</span> jj; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        binding <span class="pl-k">=</span> bindings[j];</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (binding.expressions) {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">          expressions <span class="pl-k">=</span> binding.expressions;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">          expressions <span class="pl-k">=</span> [binding];</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> scope, expression, i <span class="pl-k">=</span> <span class="pl-c1">0</span>, ii <span class="pl-k">=</span> expressions.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> ii; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">          expression <span class="pl-k">=</span> expressions[i];</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-c1">match</span>(expression)) {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">            scope <span class="pl-k">=</span> scope <span class="pl-k">||</span> element.<span class="pl-c1">scope</span>();</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">push</span>(scope.$<span class="pl-c1">eval</span>(expression));</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</tbody></table>

  </div>

</div>

<a href="https://github.com/angular/angular.js/blob/master/src/ngScenario/Scenario.js#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line…" aria-label="Jump to line" autofocus="">
    <button type="submit" class="btn">Go</button>
</form></div>




</div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com/" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>© 2015 <span title="0.06395s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com/" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="./scenario_files/frameworks-f8473dece7242da6a20d52313634881b3975c52cebaa1e6c38157c0f26185691.js"></script>
      <script async="async" crossorigin="anonymous" src="./scenario_files/github-7dc0dbace4b94c41084f8dd741c4f94d986049fd214585dcaa84268fbbfd196e.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  


    <div class="facebox" id="facebox" style="display:none;">       <div class="facebox-popup">         <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">         </div>         <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">           <span class="octicon octicon-remove-close"></span>         </button>       </div>     </div></body></html>