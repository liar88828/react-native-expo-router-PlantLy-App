export  type Plant =
    {
        id: string;
        name: string;
        family: string;
        panen: string;
        suhu: string;
        berat: string;
        harga: string;
        img: string;
        ket: string;
        area: string;
        proses: { menanam: string[]; memasak: string[]; manfaat: string[]; };
        yt: string;
    }
