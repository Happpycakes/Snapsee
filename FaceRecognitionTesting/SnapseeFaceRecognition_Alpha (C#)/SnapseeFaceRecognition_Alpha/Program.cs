using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Web;


namespace SnapseeFaceRecognition_Alpha
{
    class Program
    {
        static void Main(string[] args)
        {
            Main2();
        }

        static void Main2()
        {
            MakeRequest1();
            Console.WriteLine("Hit ENTER to exit...");
            Console.ReadLine();
        }

        static async void MakeRequest()
        {
            
            var client = new HttpClient();
            var queryString = HttpUtility.ParseQueryString(string.Empty);

            // Request headers
            client.DefaultRequestHeaders.Add("188ee96d54ad4d08a396ec1fd3e7513c", "{e07895ff78ef45c2a22c4e8fcafdf18b}");

            var uri = "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/{personGroupId}?" + queryString;

            HttpResponseMessage response;

            // Request body
            byte[] byteData = Encoding.UTF8.GetBytes("{body}");

            using (var content = new ByteArrayContent(byteData))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                response = await client.PutAsync(uri, content);
            }
        }

        static async void MakeRequest1()
        {
            var client = new HttpClient();
            var queryString = HttpUtility.ParseQueryString(string.Empty);

            // Request headers
            client.DefaultRequestHeaders.Add("188ee96d54ad4d08a396ec1fd3e7513c", "{e07895ff78ef45c2a22c4e8fcafdf18b}");

            var uri = "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/{personGroupId}/persons?" + queryString;

            HttpResponseMessage response;

            // Request body
            byte[] byteData = Encoding.UTF8.GetBytes("{body}");

            using (var content = new ByteArrayContent(byteData))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                response = await client.PostAsync(uri, content);
            }

        }




    }
}
