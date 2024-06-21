-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Jun 2024 pada 06.59
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bahasa_inggris`
--

CREATE TABLE `bahasa_inggris` (
  `id` int(11) NOT NULL,
  `materi` text NOT NULL,
  `status` text NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `bahasa_inggris`
--

INSERT INTO `bahasa_inggris` (`id`, `materi`, `status`, `summary`) VALUES
(1, 'speak', 'hadir', 'ngomong bahasa inggris'),
(2, 'react-native', 'hadir', 'belajar dong');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `ipa`
--

CREATE TABLE `ipa` (
  `id` int(11) NOT NULL,
  `materi` text NOT NULL,
  `status` text NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `ipa`
--

INSERT INTO `ipa` (`id`, `materi`, `status`, `summary`) VALUES
(1, 'react-native', 'hadir', 'belajar dong');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mapel`
--

CREATE TABLE `mapel` (
  `id` int(50) NOT NULL,
  `nama_mapel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `mapel`
--

INSERT INTO `mapel` (`id`, `nama_mapel`) VALUES
(1, 'Bahasa Indonesia'),
(2, 'Matematika'),
(3, 'Sejarah'),
(4, 'Pendidikan Pancasila'),
(5, 'Bahasa Inggris'),
(6, 'Pelajaran Kejuruan'),
(7, 'Pendidikan Agama'),
(8, 'Matpel Pilihan IPAS');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pendidikan_agama`
--

CREATE TABLE `pendidikan_agama` (
  `id` int(11) NOT NULL,
  `materi` text NOT NULL,
  `status` text NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `pendidikan_agama`
--

INSERT INTO `pendidikan_agama` (`id`, `materi`, `status`, `summary`) VALUES
(1, 'react-native', 'hadir', 'belajar dong');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pkk`
--

CREATE TABLE `pkk` (
  `id` int(11) NOT NULL,
  `materi` text NOT NULL,
  `status` text NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `pkk`
--

INSERT INTO `pkk` (`id`, `materi`, `status`, `summary`) VALUES
(1, 'react-native', 'hadir', 'belajar dong');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rpl`
--

CREATE TABLE `rpl` (
  `id` int(11) NOT NULL,
  `materi` text NOT NULL,
  `status` text NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `rpl`
--

INSERT INTO `rpl` (`id`, `materi`, `status`, `summary`) VALUES
(1, 'react-native', 'hadir', 'belajar dong');

-- --------------------------------------------------------

--
-- Struktur dari tabel `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `teacher` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `teacher`, `room`) VALUES
(1, 'Matematika', 'Pak Sukani', 'XI RPL'),
(2, 'Materi Kejuruan', 'Pak Fanny', 'LAB KEJURUAN');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kelas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `nama`, `kelas`) VALUES
(1, 'aril', 'aril', 'Muhammad Fachril Ramdhan', 'XI RPL'),
(2, 'kukuh', 'kukuh', 'Kukuh Budiman', 'XI TKJ'),
(3, 'addo', 'addo', '', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bahasa_inggris`
--
ALTER TABLE `bahasa_inggris`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `ipa`
--
ALTER TABLE `ipa`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `mapel`
--
ALTER TABLE `mapel`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pendidikan_agama`
--
ALTER TABLE `pendidikan_agama`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pkk`
--
ALTER TABLE `pkk`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `rpl`
--
ALTER TABLE `rpl`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bahasa_inggris`
--
ALTER TABLE `bahasa_inggris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `ipa`
--
ALTER TABLE `ipa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `mapel`
--
ALTER TABLE `mapel`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `pendidikan_agama`
--
ALTER TABLE `pendidikan_agama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `pkk`
--
ALTER TABLE `pkk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `rpl`
--
ALTER TABLE `rpl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
