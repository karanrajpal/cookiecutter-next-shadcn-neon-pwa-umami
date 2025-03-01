import { createClient } from '@/utils/supabase/server';

const fetchData = async () => {
    const supabase = await createClient();
    const { data } = await supabase.from("INSERT_TABLE_NAME_HERE").select();
    return data;
};

export default async function ExampleComponentFetchingData({  }) {
    const data = await fetchData() || [];
    return <div>
        <h3>Data fetched from Supabase will show up here</h3>
        <h4>Edit the example component with an actual table name and print the data</h4>
        <pre>{JSON.stringify(data)}</pre>
    </div>
}