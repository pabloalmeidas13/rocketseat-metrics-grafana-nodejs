const client = require('prom-client');
const registry = new client.Registry();

const monitoramento_pedidos_total_pedidos_faturados_counter = 
            new client.Counter({ 
                                    name: 'monitoramento_pedidos_total_pedidos_faturados_counter', 
                                    help: 'Total de Pedidos Faturados' 
                                });

const monitoramento_pedidos_carrinhos_abertos_gauge = 
            new client.Gauge({ 
                                    name: 'monitoramento_pedidos_carrinhos_abertos_gauge', 
                                    help: 'Total de Carrinhos de Compras Abertos' 
                                });

exports.metrics = async (req, res, next) =>
{
    try
    {
        // Busca as informações no mongodb
        monitoramento_pedidos_total_pedidos_faturados_counter.inc(  Math.floor(Math.random() * 11) );
        registry.registerMetric(monitoramento_pedidos_total_pedidos_faturados_counter);

        // Busca as informações no mongodb
        monitoramento_pedidos_carrinhos_abertos_gauge.set( Math.floor(Math.random() * 11) );
        registry.registerMetric(monitoramento_pedidos_carrinhos_abertos_gauge);

        res.set('Content-Type', registry.contentType);
        res.end(registry.metrics());
    }
    catch(err)
    {
        res.status(500).json(err);
    }    
}


exports.salvarPedido = async (req, res, next) =>
{
    try
    {
        res.status(200).json({message:'Pedido Salvo com Sucesso!'});
    }
    catch(err)
    {
        res.status(500).json(err);
    }    
}