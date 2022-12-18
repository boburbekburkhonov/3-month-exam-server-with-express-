-- ! CREATE TABLE COMPANY
DROP TABLE IF EXISTS company cascade;
CREATE TABLE company(
	company_id uuid default uuid_generate_v4() primary key,
	company_name varchar not null,
	company_img_url varchar not null
);

-- ! CREATE TABLE COMPLEX
DROP TABLE IF EXISTS complex cascade;
CREATE TABLE complex(
	complex_id uuid default uuid_generate_v4() primary key,
	complex_name varchar not null,
	complex_company_id uuid,
		foreign key(complex_company_id)
		references company(company_id)
		on delete set null
);

-- ! CREATE TABLE ROOMS
DROP TABLE IF EXISTS rooms cascade;
CREATE TABLE rooms(
	room_id uuid default uuid_generate_v4() primary key,
	room_count int not null,
	room_size int not null,
	room_price varchar not null,
	room_complex_id uuid,
		foreign key(room_complex_id)
		references complex(complex_id)
		on delete cascade
);

-- ! CREATE TABLE BANKS
DROP TABLE IF EXISTS banks cascade;
CREATE TABLE banks(
	bank_id uuid default uuid_generate_v4(),
	bank_name varchar not null,
	bank_give_money bigint not null,
	bank_money_term int not null,
	bank_percentage int not null
);

-- ! INSERT COMPANY
INSERT INTO company(company_name, company_img_url) VALUES
('Tashkent City', 'https://upload.wikimedia.org/wikipedia/commons/1/16/Tashkent_City_Park_at_night_2019.jpg'),
('Olmazor City', 'https://yangiuylar.uz/wp-content/uploads/2020/01/0004-1.jpg?v=1594892757'),
('Akay City', 'https://akaycity.com/themes/default/img/v-3.png');

-- ! INSERT COMPLEX
INSERT INTO complex(complex_name, complex_company_id) VALUES
('Toshkent City Shayhontohir', 'bdf9cdef-2fd2-4b90-8829-9214acc275f6'),
('Olmazor City Olmazor', '8b4668b5-ee49-4ce9-b708-0965e8871f04'),
('Olmazor City Sergeli', '8b4668b5-ee49-4ce9-b708-0965e8871f04'),
('Akay City Yunusobod', 'e407b266-b5d2-4f14-a29f-9dda26deb49a'),
('Akay City Chilonzor', 'e407b266-b5d2-4f14-a29f-9dda26deb49a'),
('Akay City Qora qamish', 'e407b266-b5d2-4f14-a29f-9dda26deb49a');

-- ! INSERT ROOMS
INSERT INTO rooms(room_count, room_size, room_price, room_complex_id) VALUES
(2, 30, '4 000 000', '03f913a1-3325-4d10-87d4-7586d6dbebbc'),
(4, 70, '8 000 000', '03f913a1-3325-4d10-87d4-7586d6dbebbc'),
(5, 80, '9 000 000', '03f913a1-3325-4d10-87d4-7586d6dbebbc'),
(3, 40, '5 000 000', 'ceff1dbe-2129-4575-8ecb-c67319650e22'),
(4, 70, '8 000 000', 'ceff1dbe-2129-4575-8ecb-c67319650e22'),
(5, 80, '9 000 000', 'ceff1dbe-2129-4575-8ecb-c67319650e22'),
(3, 40, '4 500 000', '652ab4b1-546f-43fd-804c-c7e749467a12'),
(4, 70, '7 200 000', '652ab4b1-546f-43fd-804c-c7e749467a12'),
(5, 80, '8 800 000', '652ab4b1-546f-43fd-804c-c7e749467a12'),
(3, 40, '6 500 000', 'c9c3cb96-d6ab-46a2-a232-014ede08a19e'),
(4, 70, '8 200 000', 'c9c3cb96-d6ab-46a2-a232-014ede08a19e'),
(5, 80, '9 800 000', 'c9c3cb96-d6ab-46a2-a232-014ede08a19e'),
(3, 40, '6 000 000', '2d97912c-c55c-47e3-ba7e-20b55ce9c4d7'),
(4, 70, '8 000 000', '2d97912c-c55c-47e3-ba7e-20b55ce9c4d7'),
(5, 80, '9 000 000', '2d97912c-c55c-47e3-ba7e-20b55ce9c4d7'),
(3, 40, '4 000 000', '6d8a09c5-d167-4f3f-8531-d6719c488dc7'),
(4, 70, '6 000 000', '6d8a09c5-d167-4f3f-8531-d6719c488dc7'),
(5, 80, '7 000 000', '6d8a09c5-d167-4f3f-8531-d6719c488dc7');

-- ! INSERT BANKS
INSERT INTO banks(bank_name, bank_give_money, bank_money_term, bank_percentage) VALUES
('Xalq Banki', 810000000, 15, 5),
('Xalq Banki', 750000000, 10, 5),
('Xalq Banki', 430000000, 5, 5),
('Anor Bank', 730000000, 15, 7),
('Anor Bank', 180000000, 10, 7),
('Anor Bank', 350000000, 5, 7),
('Aloqa Bank', 450000000, 15, 4),
('Aloqa Bank', 570000000, 10, 4),
('Aloqa Bank', 900000000, 5, 4);

-- CREATE PROCEDURE ADD COMPANY
create or replace procedure companyAdd(name_company varchar, img_url varchar)
language plpgsql
as
$$
	begin
		insert into company(company_name, company_img_url) values(name_company, img_url);
	end
$$;

-- CREATE PROCEDURE DELETE COMPANY
create or replace procedure companyDelete(id uuid)
language plpgsql
as
$$
	begin
		delete from company where company_id = id;
	end
$$;

-- CREATE PROCEDURE ADD COMPLEX
create or replace procedure complexAdd(name_complex varchar, complex_company uuid)
language plpgsql
as
$$
	begin
		insert into complex(complex_name, complex_company_id) values(name_complex, complex_company);
	end
$$;

-- CREATE PROCEDURE DELETE COMPLEX
create or replace procedure complexDelete(id uuid)
language plpgsql
as
$$
	begin
		delete from complex where complex_id = id;
	end
$$;

-- CREATE PROCEDURE ADD ROOMS
create or replace procedure roomsAdd(count int, size int, price varchar, complex_id uuid)
language plpgsql
as
$$
	begin
		insert into rooms(room_count, room_size, room_price, room_complex_id) values(count, size, price, complex_id);
	end
$$;

-- CREATE PROCEDURE DELETE ROOMS
create or replace procedure roomsDelete(id uuid)
language plpgsql
as
$$
	begin
		delete from rooms where room_id = id;
	end
$$;

-- CREATE PROCEDURE ADD BANKS
create or replace procedure banksAdd(bank_name varchar, give_money bigint, term int, percentage int)
language plpgsql
as
$$
	begin
		insert into banks(bank_name, bank_give_money, bank_money_term, bank_percentage) values(bank_name, give_money, term, percentage);
	end
$$;

-- CREATE PROCEDURE DELETE BANKS
create or replace procedure banksDelete(id uuid)
language plpgsql
as
$$
	begin
		delete from banks where bank_id = id;
	end
$$;

-- ROOMS WITH COMPLEX
select
	c.complex_name,
	r.room_count,
	r.room_size,
	r.room_price
from
	complex c
join
	rooms r
on
	c.complex_id = r.room_complex_id;


-- COMPANY WITH COMPLEX
select
	*
from
	company c
join
	complex cp
on
	c.company_id = cp.complex_company_id;