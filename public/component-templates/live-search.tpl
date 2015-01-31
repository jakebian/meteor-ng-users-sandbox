<input ng-model="search.$" placeholder="type to search" class="form-control"> <br>

<ul class="list-group">
    <li ng-repeat="object in objects | filter:search:strict" class="list-group-item">
        <div ng-include="objectTemplateUrl"></div>
    </li>
</ul>