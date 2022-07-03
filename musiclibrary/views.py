from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MusicLibrarySerializer
from .models import MusicLibrary


@api_view(['GET'])
def music_library_list(request):
    musiclibrary = MusicLibrary.objects.all()

    serializer = MusicLibrarySerializer(musiclibrary, many=True)

    return Response(serializer.data)
