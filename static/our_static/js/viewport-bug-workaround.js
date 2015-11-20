
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Page not found at /assets/js/ie10-viewport-bug-workaround.js</title>
  <meta name="robots" content="NONE,NOARCHIVE">
  <style type="text/css">
    html * { padding:0; margin:0; }
    body * { padding:10px 20px; }
    body * * { padding:0; }
    body { font:small sans-serif; background:#eee; }
    body>div { border-bottom:1px solid #ddd; }
    h1 { font-weight:normal; margin-bottom:.4em; }
    h1 span { font-size:60%; color:#666; font-weight:normal; }
    table { border:none; border-collapse: collapse; width:100%; }
    td, th { vertical-align:top; padding:2px 3px; }
    th { width:12em; text-align:right; color:#666; padding-right:.5em; }
    #info { background:#f6f6f6; }
    #info ol { margin: 0.5em 4em; }
    #info ol li { font-family: monospace; }
    #summary { background: #ffc; }
    #explanation { background:#eee; border-bottom: 0px none; }
  </style>
</head>
<body>
  <div id="summary">
    <h1>Page not found <span>(404)</span></h1>
    <table class="meta">
      <tr>
        <th>Request Method:</th>
        <td>GET</td>
      </tr>
      <tr>
        <th>Request URL:</th>
        <td>http://127.0.0.1:8000/assets/js/ie10-viewport-bug-workaround.js</td>
      </tr>
      
    </table>
  </div>
  <div id="info">
    
      <p>
      Using the URLconf defined in <code>django_project.urls</code>,
      Django tried these URL patterns, in this order:
      </p>
      <ol>
        
          <li>
            
                ^$
                [name='home']
            
          </li>
        
          <li>
            
                ^contact/
                [name='contact']
            
          </li>
        
          <li>
            
                ^admin/
                
            
          </li>
        
          <li>
            
                ^static\/(?P&lt;path&gt;.*)$
                
            
          </li>
        
          <li>
            
                ^media\/(?P&lt;path&gt;.*)$
                
            
          </li>
        
      </ol>
      <p>The current URL, <code>assets/js/ie10-viewport-bug-workaround.js</code>, didn't match any of these.</p>
    
  </div>

  <div id="explanation">
    <p>
      You're seeing this error because you have <code>DEBUG = True</code> in
      your Django settings file. Change that to <code>False</code>, and Django
      will display a standard 404 page.
    </p>
  </div>
</body>
</html>
