using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

    //app.Use(async (context, next) =>
    //{
    //    await next();
    //    if (context.Response.StatusCode == 404)
    //    {
    //        context.Request.Path = "/Home";
    //        await next();
    //    }
    //});
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

//app.Use(async (context, next) =>
//{
//    await next();
//    getSetCode(context.Response.StatusCode);
//    await next();
//});

//void getSetCode(int code)
//{
//    app.UseStatusCodePagesWithReExecute($"/Error/NotFound/{code}");
//}

//app.UseStatusCodePagesWithReExecute($"/Error/NotFound/{404}");

app.UseStatusCodePagesWithReExecute($"/Error/NotFound");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "about",
    pattern: "{controller=About}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "contact",
    pattern: "{controller=Contact}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "admin",
    pattern: "{controller=Admin}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "error",
    pattern: "{controller=Error}/{action=Index}/{id?}");

app.Run();
