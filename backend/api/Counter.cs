using Newtonsoft.Json;

namespace Company.Function // 
{
    public class Counter
    {
        [JsonProperty(PropertyName = "id")] //match to DB keys
        public string Id { get; set; }

        [JsonProperty(PropertyName = "count")]
        public int Count { get; set; }
    }
}