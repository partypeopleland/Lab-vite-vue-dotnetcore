var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(config => config.RootPath = "dist");
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // app.UseCors(b => b.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
}

app.UseRouting();
app.UseEndpoints(e => e.MapDefaultControllerRoute());


app.UseSpaStaticFiles();
app.UseSpa(b =>
{
    if (app.Environment.IsDevelopment())
    {
        b.UseProxyToSpaDevelopmentServer("http://localhost:5173/");
    }
});
app.Run();