const app = Vue.createApp({
    data(){
        return{
            categoria: "Joia",
            nomeProduto: "Bracelete ouro 14k",
            descricao: "Bracelete de ouro 14k com design elegante. Perfeito para ocasiões especiais e adicionar um toque de sofisticação ao seu visual.",
            preco: 800,
            estoque: 7,
            quantidade: 1,
            descontoAtivo: false,
            mensagemCompra: "",
            limiteEstoque: "RESTAM POUCAS UNIDADES EM ESTOQUE!"
        }
    },
    computed: {
        total() {
                let valor = this.preco * this.quantidade
                if (this.descontoAtivo) {
                valor = valor * 0.85
            }
            return valor
        }, 
        precoFormatado() {
            return this.preco.toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            )
        },
        totalFormatado() {
           return this.total.toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            )
        }
    },

    methods: {
            aplicarDesconto(){
                this.descontoAtivo =
                !this.descontoAtivo
            },
        
        
            comprarProduto(){
            if (
                this.quantidade > 0 &&
                this.quantidade <= this.estoque
            ) {
                this.estoque -= this.quantidade

                this.mensagemCompra = 
                "Compra realizada com sucesso!"
            } else {
                this.mensagemCompra =
                "Quantidade indisponível em estoque."
            }
        }
    }
})
app.mount("#app")