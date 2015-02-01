<div class="post panel panel-default">
    <div class="panel-heading">
         <a href="/user/{{author.username}}">{{post.author.name}}</a> {{timeText}}
    </div>
    <div class="panel-body">
        <div class="meta">
           
        </div>
        <div class="post-text">
            {{post.text}}
        </div>
        <div class="row">
            <post-attachment ng-if="post.media" media="post.media"></post-attachment>
        </div>
    </div>
</div>
