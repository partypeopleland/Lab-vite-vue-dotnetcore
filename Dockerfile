FROM mcr.microsoft.com/dotnet/aspnet:6.0

COPY output .

EXPOSE 80

ENTRYPOINT ["dotnet", "back-end.dll"]
