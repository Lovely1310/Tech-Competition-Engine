from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .serializers import ProblemSerializer
from .models import Problem

# Company Login
@api_view(['POST'])
def company_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Please provide username and password'}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=username, password=password)

    if not user:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})


# Post a Problem
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_problem(request):
    data = request.data.copy()
    data['company'] = request.user.id

    serializer = ProblemSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Get All Problems of the Company
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_problems(request):
    problems = Problem.objects.filter(company=request.user)
    serializer = ProblemSerializer(problems, many=True)
    return Response(serializer.data)


# Update a Problem
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_problem(request, pk):
    try:
        problem = Problem.objects.get(pk=pk, company=request.user)
    except Problem.DoesNotExist:
        return Response({'error': 'Problem not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProblemSerializer(problem, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Delete a Problem
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_problem(request, pk):
    try:
        problem = Problem.objects.get(pk=pk, company=request.user)
    except Problem.DoesNotExist:
        return Response({'error': 'Problem not found'}, status=status.HTTP_404_NOT_FOUND)

    problem.delete()
    return Response({'message': 'Problem deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

