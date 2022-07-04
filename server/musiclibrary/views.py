from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MusicLibrarySerializer
from .models import MusicLibrary


@api_view(['GET', 'POST'])
def music_library_list(request):
    if request.method == 'GET':
        musiclibrary = MusicLibrary.objects.all()
        serializer = MusicLibrarySerializer(musiclibrary, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MusicLibrarySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def music_detail(request, pk):
    musiclibrary = get_object_or_404(MusicLibrary, pk=pk)
    if request.method == 'GET':
        serializer = MusicLibrarySerializer(musiclibrary)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MusicLibrarySerializer(musiclibrary, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        musiclibrary.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)