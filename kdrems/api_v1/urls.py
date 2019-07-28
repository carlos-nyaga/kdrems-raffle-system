from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        r'^api/v1/attendees/(?P<pk>[0-9]+)$',
        views.get_delete_update_attendee,
        name='get_delete_update_attendee'
    ),
    url(
        r'^api/v1/attendees/$',
        views.get_post_attendees,
        name='get_post_attendees'
    )
]