import json

from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def home(request):
    if request.user.is_authenticated:
        user = {'id': request.user.id, 'username': request.user.username }
    else:
        user = json.dumps(None)
    return render(request, "base.html", { 'payload': { 'user': user } })
