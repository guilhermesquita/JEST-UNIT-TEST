describe('Example Controller', ()=>{
    it('should sum 1+1', ()=>{

        //ARRANGE - Preparação do cenário para testes
        function sum(a: number, b: number){
            return a + b;
        }

        //ACT - Testando a ação
        const result = sum(1, 2)

        //ASSERT - Validação do teste
        expect(result).toBe(3)
    })
})